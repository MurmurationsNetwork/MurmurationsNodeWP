import axios from 'redaxios'
import { GenerateForm } from '@murmurations/jsrfg'
import { generateSchemaInstance } from '@murmurations/jsig'
import { useEffect, useState } from 'react'
import { createId } from '@paralleldrive/cuid2'

const schemas = [
  { title: 'An Organization', name: 'organizations_schema-v1.0.0' },
  { title: 'A Person', name: 'cta_person-v0.1.0' },
  { title: 'An Offer or Want', name: 'offers_wants_prototype-v0.0.2' }
]

export default function App() {
  // eslint-disable-next-line no-undef
  const wordpressUrl = murmurations_node.wordpress_url
  // eslint-disable-next-line no-undef
  const wp_nonce = murmurations_node.wp_nonce

  const [env, setEnv] = useState('test')
  const [indexUrl, setIndexUrl] = useState(
    'https://test-index.murmurations.network/v2'
  )
  const [libraryUrl, setLibraryUrl] = useState(
    'https://test-library.murmurations.network/v2'
  )
  const [loading, setLoading] = useState(false)
  const [schema, setSchema] = useState('')
  const [profiles, setProfiles] = useState('')
  const [profileData, setProfileData] = useState(null)

  const apiUrl = `${wordpressUrl}/wp-json/murmurations-node/v1`

  useEffect(() => {
    fetchProfiles(env).then(() => {
      console.log('Profiles fetched')
    })
  }, [])

  const clickTestIndex = async () => {
    setEnv('test')
    setIndexUrl('https://test-index.murmurations.network/v2')
    setLibraryUrl('https://test-library.murmurations.network/v2')
    await fetchProfiles('test')
    setSchema('')

    const profile_box = document.getElementById('profile_box')
    profile_box.classList.remove('bg-orange-400')
    profile_box.classList.add('bg-orange-300')
  }

  const clickLiveIndex = async () => {
    setEnv('production')
    setIndexUrl('https://index.murmurations.network/v2')
    setLibraryUrl('https://library.murmurations.network/v2')
    await fetchProfiles('production')
    setSchema('')

    const profile_box = document.getElementById('profile_box')
    profile_box.classList.remove('bg-orange-300')
    profile_box.classList.add('bg-orange-400')
  }

  const fetchProfiles = async environment => {
    try {
      const response = await axios.get(
        `${apiUrl}/profile?env=${environment}&_wpnonce=${wp_nonce}`
      )
      setProfiles(response.data)
    } catch (error) {
      if (error && error.status === 404) {
        setProfiles('')
      } else {
        console.error('Error fetching profiles:', error)
      }
    }
  }

  const parseSchemaType = schema => {
    const res = schemas.find(item => item.name === schema)

    if (res) {
      return res.title
    } else {
      return schema
    }
  }

  const handleSelectSchema = async (isModify, selectedSchema) => {
    if (!isModify) {
      const defaultProfile = {
        profile: {
          primary_url: wordpressUrl
        }
      }
      setProfileData(defaultProfile)
      selectedSchema = document.getElementById('schema').value
      if (selectedSchema === '') {
        return
      }
    }
    setLoading(true)
    setSchema('')

    axios
      .get(`${libraryUrl}/schemas/${selectedSchema}`)
      .then(({ data }) => {
        // todo: use parseSchemas method
        // hotfix: I replaced the schema manually to make it work
        data.metadata.schema = [selectedSchema]
        setSchema(data)
      })
      .catch(() => {
        console.error('error fetching schema')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleSubmit = async event => {
    setLoading(true)

    event.preventDefault()
    const formData = new FormData(event.target)
    const formValues = {}

    formData.forEach((value, key) => {
      if (key !== 'profile_title' && key !== 'cuid') {
        formValues[key] = value
      }
    })

    const result = generateSchemaInstance(schema, formValues)
    const profileTitle = formData.get('profile_title')

    // call WordPress api to save the profile
    try {
      if (formData.has('cuid')) {
        const cuid = formData.get('cuid')
        let profileToUpdate = {
          title: profileTitle,
          linked_schemas: result.linked_schemas,
          profile: result,
          env: env
        }

        const response = await updateRequest(
          `${apiUrl}/profile/${cuid}?_wpnonce=${wp_nonce}`,
          profileToUpdate
        )
        console.log('Update successful! Response data:', response)

        // if not localhost, send request to index
        if (!isLocalhost()) {
          await sendRequestToIndex(cuid)
        }
      } else {
        const cuid = createId()
        let newProfile = {
          cuid: cuid,
          title: profileTitle,
          linked_schemas: result.linked_schemas,
          profile: result,
          env: env
        }

        await postRequest(`${apiUrl}/profile?_wpnonce=${wp_nonce}`, newProfile)

        // if not localhost, send request to index
        if (!isLocalhost()) {
          const res = await sendRequestToIndex(cuid)

          if (!res.data.node_id) {
            alert('Error posting profile to index:' + res)
            return
          }

          await updateRequest(
            `${apiUrl}/profile/${cuid}?_wpnonce=${wp_nonce}`,
            {
              node_id: res.data.node_id
            }
          )
        }
      }
      setSchema('')
      await fetchProfiles(env)
    } catch (error) {
      console.error('Error updating/posting profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleView = cuid => {
    window.open(`${apiUrl}/profile/${cuid}`, '_blank')
  }

  const handleModify = async cuid => {
    setLoading(true)
    setSchema('')

    try {
      let response = await axios.get(
        `${apiUrl}/profile-detail/${cuid}?_wpnonce=${wp_nonce}`
      )
      if (
        response.data.profile.primary_url == null ||
        response.data.profile.primary_url === ''
      ) {
        response.data.profile.primary_url = wordpressUrl
      }
      setProfileData(response.data)
      // todo: we need to fetchSchema according to the linked_schemas
      await handleSelectSchema(true, response.data.linked_schemas[0])
    } catch (error) {
      console.error('Error modifying profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async cuid => {
    if (isLocalhost()) {
      alert('Unable to resend profile from localhost')
      return
    }

    setLoading(true)
    setSchema('')

    try {
      const res = await sendRequestToIndex(cuid)

      if (!res.data.node_id) {
        alert('Error resending profile:' + res)
        return
      }

      const response = await updateRequest(
        `${apiUrl}/profile/update-node-id/${cuid}?_wpnonce=${wp_nonce}`,
        {
          node_id: res.data.node_id
        }
      )
      console.log('Update successful! Response data:', response)
    } catch (error) {
      console.error('Error resending profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async cuid => {
    setLoading(true)
    setSchema('')

    try {
      const response = await axios.get(
        `${apiUrl}/profile-detail/${cuid}?_wpnonce=${wp_nonce}`
      )
      await updateRequest(
        `${apiUrl}/profile/update-deleted-at/${cuid}?_wpnonce=${wp_nonce}`,
        {}
      )

      if (!isLocalhost()) {
        await deleteNodeFromIndex(response.data.node_id)
      }
      await axios.delete(`${apiUrl}/profile/${cuid}?_wpnonce=${wp_nonce}`)
      await fetchProfiles(env)
    } catch (error) {
      console.error('Error deleting profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const isLocalhost = () => {
    return (
      wordpressUrl.indexOf('localhost') !== -1 || wordpressUrl.endsWith('.test')
    )
  }

  const postRequest = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error posting data: ${error}`)
    }
  }

  const updateRequest = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error updating data: ${error}`)
    }
  }

  const sendRequestToIndex = async cuid => {
    try {
      const response = await fetch(`${indexUrl}/nodes-sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          profile_url: `${apiUrl}/profile/${cuid}`
        })
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      alert(`Error sending request: ${error}`)
    }
  }

  const deleteNodeFromIndex = async nodeId => {
    try {
      const response = await fetch(`${indexUrl}/nodes/${nodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      alert(`Error sending request: ${error}`)
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-2">
      <h1 className="text-3xl">Murmurations Profile Generator</h1>
      <h2 className="text-lg">What do you want to create a Profile for?</h2>
      <div className="my-2 flex flex-row items-start px-2 py-1 md:my-4 md:px-4 md:py-2">
        <div>
          <form method="post">
            <select
              className="block w-full border-2 border-gray-400 bg-white px-4 py-2 md:w-96"
              id="schema"
              name="schema"
              multiple={false}
              required={true}
              size={4}
            >
              {schemas.map(schema => (
                <option
                  className="mb-1 border-gray-50 px-2 py-0 text-xl"
                  value={schema.name}
                  key={schema.name}
                >
                  {schema.title}
                </option>
              ))}
            </select>
          </form>
          <button
            className="mt-4 rounded-full bg-orange-500 px-4 py-2 font-bold text-white text-lg active:scale-90 hover:scale-110 hover:bg-orange-400 disabled:opacity-75"
            disabled={loading}
            onClick={() => handleSelectSchema(false)}
          >
            {loading ? 'Loading ..' : 'Select'}
          </button>
        </div>
        <div className="md:ml-16">
          <p className="mb-2 text-sm">
            Profiles can show up on{' '}
            <a href="#" target="_blank" className="text-blue-600">
              multiple aggregators
            </a>
            .
          </p>
          <p className="mb-2 text-sm">Example aggregators include:</p>
          <p className="mb-2 text-sm">
            People are published in the{' '}
            <a href="#" target="_blank" className="text-blue-600">
              Murmurations Directory
            </a>
            .
            <br />
            Organizations are published in the{' '}
            <a href="#" target="_blank" className="text-blue-600">
              Murmurations Map
            </a>
            .
            <br />
            Offers and Wants are published in the{' '}
            <a href="#" target="_blank" className="text-blue-600">
              Murmurations Marketplace
            </a>
            .
          </p>
        </div>
      </div>
      <div className="box-border flex flex-col md:flex-row">
        <div className="inset-0 basis-full pr-4 py-2 md:py-4 md:sticky md:top-0 md:h-screen md:basis-3/5 md:overflow-y-auto">
          {schema && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl">
                Fill in the fields below to create a Profile
              </h2>
              <legend className="jsrfg-title">
                Profile Title:<span className="jsrfg-required"> *</span>
              </legend>
              <div className="jsrfg-enum-block">
                <input
                  type="text"
                  name="profile_title"
                  id="profile_title"
                  className="jsrfg-array-input"
                  defaultValue={profileData ? profileData.title : ''}
                  required={true}
                />
              </div>
              {profileData ? (
                <div>
                  {profileData.cuid ? (
                    <input type="hidden" name="cuid" value={profileData.cuid} />
                  ) : (
                    ''
                  )}
                  <GenerateForm
                    schema={schema}
                    profileData={profileData.profile}
                  />
                </div>
              ) : (
                <GenerateForm schema={schema} />
              )}
              <button
                className="mt-4 rounded-full bg-orange-500 px-4 py-2 font-bold text-white text-lg active:scale-90 hover:scale-110 hover:bg-orange-400 disabled:opacity-75"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? 'Loading ..'
                  : env === 'test'
                  ? 'Submit to Test Index'
                  : 'Submit to Live Index'}
              </button>
              {env !== 'test' && (
                <div className="mt-2 text-lg">
                  Please only publish genuine profiles to the Live Index. For
                  testing use the Test Index.
                </div>
              )}
            </form>
          )}
        </div>
        <div className="basis-full px-2 py-2 md:basis-2/5 md:px-4 md:py-4 text-xl">
          My Profiles
          <div className="box-border flex flex-col md:flex-row mt-8">
            <div
              className="cursor-pointer basis-1/2 bg-orange-300 rounded-t-md mr-1 p-2 text-white text-center"
              onClick={() => clickTestIndex()}
            >
              Test Index
            </div>
            <div
              className="cursor-pointer basis-1/2 bg-orange-400 rounded-t-md ml-1 p-2 text-white text-center"
              onClick={() => clickLiveIndex()}
            >
              Live Index
            </div>
          </div>
          <div className="bg-orange-300 rounded-b-md p-4" id="profile_box">
            {profiles && profiles.length > 0 ? (
              profiles.map(profile => (
                <div
                  className="box-border flex flex-col bg-orange-100 rounded-md py-4 my-4"
                  key={profile.id}
                >
                  <div className="box-border flex px-2">
                    <div className="basis-1/3">Name: </div>
                    <div className="basis-2/3">{profile.title}</div>
                  </div>
                  <div className="box-border flex px-2">
                    <div className="basis-1/3">Type:</div>
                    <div className="basis-2/3">
                      {profile.linked_schemas &&
                      profile.linked_schemas.length > 0
                        ? parseSchemaType(profile.linked_schemas[0])
                        : 'No linked schemas'}
                    </div>
                  </div>
                  <div className="box-border flex px-2">
                    <div className="basis-1/3">Updated:</div>
                    <div className="basis-2/3">{profile.updated_at}</div>
                  </div>
                  <div className="box-border flex flex-col md:flex-row mt-4">
                    <button
                      onClick={() => handleView(profile.cuid)}
                      className="my-2 mx-4 rounded-full bg-yellow-500 px-4 py-2 font-bold text-white active:scale-90 hover:scale-110 hover:bg-yellow-400 disabled:opacity-75"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleResend(profile.cuid)}
                      className="my-2 mx-4 rounded-full bg-amber-500 px-4 py-2 font-bold text-white active:scale-90 hover:scale-110 hover:bg-yellow-400 disabled:opacity-75"
                      disabled={loading}
                    >
                      {loading ? 'Loading ..' : 'Resend'}
                    </button>
                    <button
                      onClick={() => handleModify(profile.cuid)}
                      className="my-2 mx-4 rounded-full bg-orange-500 px-4 py-2 font-bold text-white active:scale-90 hover:scale-110 hover:bg-orange-400 disabled:opacity-75"
                      disabled={loading}
                    >
                      {loading ? 'Loading ..' : 'Modify'}
                    </button>
                    <button
                      onClick={() => handleDelete(profile.cuid)}
                      className="my-2 mx-4 rounded-full bg-red-500 px-4 py-2 font-bold text-white active:scale-90 hover:scale-110 hover:bg-red-400 disabled:opacity-75"
                      disabled={loading}
                    >
                      {loading ? 'Loading ..' : 'Delete'}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <div className="my-2 text-lg text-white font-semibold">
                  No Profiles
                </div>
                <div className="text-white text-base">
                  Select the type of Profile you want to create and then submit
                  it to the Murmurations Index.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
