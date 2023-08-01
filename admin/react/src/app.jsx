import axios from 'redaxios'
import { GenerateForm } from '@murmurations/jsrfg'
import { generateSchemaInstance } from '@murmurations/jsig'
import { useEffect, useRef, useState } from 'react'
import { createId } from '@paralleldrive/cuid2'

const schemas = [
  { title: 'An Organization', name: 'organizations_schema-v1.0.0' },
  { title: 'A Person', name: 'people_schema-v0.1.0' },
  { title: 'An Offer or Want', name: 'offers_wants_schema-v0.1.0' }
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
  const [validationErrors, setValidationErrors] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [profileErrors, setProfileErrors] = useState(null)
  const errorContainerRef = useRef(null)

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
  }

  const clickLiveIndex = async () => {
    setEnv('production')
    setIndexUrl('https://index.murmurations.network/v2')
    setLibraryUrl('https://library.murmurations.network/v2')
    await fetchProfiles('production')
    setSchema('')
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
    let rawData = {}

    for (let key of formData.keys()) {
      const values = formData.getAll(key)

      // Deal with multiple values submitted as an array
      if (key.endsWith('[]')) {
        const keyWithoutBrackets = key.slice(0, -2)

        if (values.length === 1) {
          rawData[keyWithoutBrackets] = []
          rawData[keyWithoutBrackets].push(...values)
        } else {
          rawData[keyWithoutBrackets] = values
        }

        delete rawData[key]
      } else if (key !== 'profile_title' && key !== 'cuid') {
        rawData[key] = values.length > 1 ? values : values[0]
      }
    }

    const result = generateSchemaInstance(schema, rawData)
    const profileTitle = formData.get('profile_title')

    setValidationErrors(null)
    // validate the profile before submitting
    try {
      const response = await fetch(`${indexUrl}/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      })

      if (response.status !== 200) {
        const data = await response.json()
        setValidationErrors(data.errors)
        // scroll to the error container to make it visible
        errorContainerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        return
      }
    } catch (error) {
      console.error('Error while validating data:', error)
    } finally {
      setLoading(false)
    }

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
          const res = await sendRequestToIndex(cuid)
          if (!res.ok) {
            const resJson = await res.json()
            await updateIndexErrors(cuid, resJson)
          } else {
            await updateIndexErrors(cuid, null)
          }
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
          const resJson = await res.json()

          if (!res.ok) {
            console.log('needs to update index errors')
            await updateIndexErrors(cuid, resJson)
          } else {
            console.log('no needs to update index errors')
            await updateRequest(
              `${apiUrl}/profile/update-node-id/${cuid}?_wpnonce=${wp_nonce}`,
              {
                node_id: resJson.data.node_id
              }
            )
            await updateIndexErrors(cuid, null)
          }
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
      if (!res.ok) {
        const resJson = await res.json()
        await updateIndexErrors(cuid, resJson)
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
        const res = await deleteNodeFromIndex(response.data.node_id)
        if (!res.ok) {
          const resJson = await res.json()
          await updateIndexErrors(cuid, resJson)
        }
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
        alert(`Error: ${response.status} ${response.statusText}`)
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
        alert(`Error: ${response.status} ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error updating data: ${error}`)
    }
  }

  const sendRequestToIndex = async cuid => {
    try {
      return await fetch(`${indexUrl}/nodes-sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          profile_url: `${apiUrl}/profile/${cuid}`
        })
      })
    } catch (error) {
      console.log(`Error sending request: ${error}`)
    }
  }

  const deleteNodeFromIndex = async nodeId => {
    try {
      return await fetch(`${indexUrl}/nodes/${nodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      alert(`Error sending request: ${error}`)
    }
  }

  const updateIndexErrors = async (cuid, errors) => {
    try {
      await updateRequest(
        `${apiUrl}/profile/update-index-errors/${cuid}?_wpnonce=${wp_nonce}`,
        {
          index_errors: errors
        }
      )
    } catch (error) {
      alert(`Error updating index errors: ${error}`)
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-2">
      <h1 className="text-3xl">Murmurations Profile Generator</h1>
      <div className="mt-4">
        To which environment do you want to publish your Profile?
      </div>
      <div className="mb-4">
        Please only publish genuine profiles to the <strong>Live Index</strong>.
        For testing use the <strong>Test Index.</strong>
      </div>
      <div className="box-border flex flex-row mt-8 text-lg">
        <div
          className="cursor-pointer basis-1/2 bg-orange-300 rounded-t-md mr-1 p-2 text-white text-center"
          onClick={() => clickTestIndex()}
        >
          <span
            className={`${
              env === 'test' ? 'font-bold text-2xl' : 'font-light align-middle'
            }`}
          >
            Test Index
          </span>
        </div>
        <div
          className="cursor-pointer basis-1/2 bg-orange-400 rounded-t-md ml-1 p-2 text-white text-center"
          onClick={() => clickLiveIndex()}
        >
          <span
            className={`${
              env !== 'test' ? 'font-bold text-2xl' : 'font-light align-middle'
            }`}
          >
            Live Index
          </span>
        </div>
      </div>
      <div
        className={`border-8 ${
          env === 'test' ? 'border-orange-300' : 'border-orange-400'
        } px-4 pt-4`}
      >
        <h2 className="text-lg ml-4">
          What do you want to create a Profile for?
        </h2>
        <div className="my-0 flex flex-col lg:flex-row items-start px-2 py-1 md:px-4 md:py-2">
          <div className="basis-full lg:basis-3/5">
            <form method="post">
              <select
                className="block w-full border-1 border-gray-400 bg-white px-4 py-2"
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
          <div className="mt-8 lg:mt-0 xl:px-4 basis-full lg:basis-2/5 text-base">
            <div>
              The Murmurations Map displays{' '}
              <a
                href={
                  env === 'test'
                    ? 'https://test-map.murmurations.network/?schema=organizations_schema-v1.0.0'
                    : 'https://map.murmurations.network/?schema=organizations_schema-v1.0.0'
                }
                target="_blank"
                className="text-blue-600"
                rel="noreferrer"
              >
                Organizations
              </a>
              ,{' '}
              <a
                href={
                  env === 'test'
                    ? 'https://test-map.murmurations.network/?schema=people_schema-v0.1.0'
                    : 'https://map.murmurations.network/?schema=people_schema-v0.1.0'
                }
                target="_blank"
                className="text-blue-600"
                rel="noreferrer"
              >
                People
              </a>{' '}
              and{' '}
              <a
                href={
                  env === 'test'
                    ? 'https://test-map.murmurations.network/?schema=offers_wants_schema-v0.1.0'
                    : 'https://map.murmurations.network/?schema=offers_wants_schema-v0.1.0'
                }
                target="_blank"
                className="text-blue-600"
                rel="noreferrer"
              >
                Offers & Wants
              </a>{' '}
              that have geolocation coordinates.
            </div>
          </div>
        </div>
        <div ref={errorContainerRef}>
          {validationErrors ? (
            <div className="my-0 flex flex-col lg:flex-row items-start px-2 py-1 md:px-4 md:py-2">
              <div className="basis-full lg:basis-3/5">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  <strong className="font-bold text-lg">
                    Validation Failed!
                  </strong>
                  <ul>
                    {validationErrors.map((error, index) => (
                      <li key={index} className="leading-none text-base">
                        Title: {error.title}, Status: {error.status}, Source:{' '}
                        {error.source.pointer}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="box-border flex flex-col xl:flex-row">
          <div className="inset-0 basis-full pr-4 py-2 md:py-4 top-0 lg:basis-3/5 md:overflow-y-auto">
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
                    placeholder="For your reference only, to identify different Profiles in the list to the right. This will not be published."
                    defaultValue={profileData ? profileData.title : ''}
                    required={true}
                  />
                </div>
                {profileData ? (
                  <div>
                    {profileData.cuid ? (
                      <input
                        type="hidden"
                        name="cuid"
                        value={profileData.cuid}
                      />
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
                {env !== 'test' && (
                  <div className="mt-2 text-lg">
                    Please only publish genuine profiles to the Live Index. For
                    testing use the Test Index.
                  </div>
                )}
                <button
                  className="m-4 rounded-full bg-orange-500 px-4 py-2 font-bold text-white text-lg active:scale-90 hover:scale-110 hover:bg-orange-400 disabled:opacity-75"
                  type="submit"
                  disabled={loading}
                >
                  {loading
                    ? 'Loading ..'
                    : env === 'test'
                    ? 'Submit to Test Index'
                    : 'Submit to Live Index'}
                </button>
              </form>
            )}
          </div>
          <div className="basis-full px-2 py-2 lg:basis-2/5 md:px-4 md:py-4 text-xl">
            <div
              className={`${
                env === 'test'
                  ? 'bg-orange-300 rounded-md px-4 py-1 max-w-lg xl:max-w-full'
                  : 'bg-orange-400 rounded-md px-4 py-1 max-w-lg xl:max-w-full'
              }`}
            >
              {profiles && profiles.length > 0 ? (
                profiles.map(profile => (
                  <div
                    className="box-border flex flex-col bg-orange-100 rounded-md px-2 md:px-8 py-2 md:py-4 my-2 md:my-4"
                    key={profile.id}
                  >
                    <div className="box-border flex">
                      <div className="basis-1/3">Title: </div>
                      <div className="basis-2/3">{profile.title}</div>
                    </div>
                    <div className="box-border flex">
                      <div className="basis-1/3">Type:</div>
                      <div className="basis-2/3">
                        {profile.linked_schemas &&
                        profile.linked_schemas.length > 0
                          ? parseSchemaType(profile.linked_schemas[0])
                          : 'No linked schemas'}
                      </div>
                    </div>
                    <div className="box-border flex">
                      <div className="basis-1/3">Updated:</div>
                      <div className="basis-2/3">{profile.updated_at}</div>
                    </div>
                    {profile.index_errors ? (
                      <div className="box-border flex">
                        <div className="basis-1/3 self-center">Errors:</div>
                        <div className="basis-2/3 self-center">
                          <button
                            onClick={() => {
                              setShowModal(true)
                              setProfileErrors(profile.index_errors)
                            }}
                            className="my-1 mx-2 max-w-fit rounded-full bg-rose-500 px-4 py-2 font-bold text-white text-base active:scale-90 hover:scale-110 hover:bg-rose-400 disabled:opacity-75"
                          >
                            View Error Details
                          </button>
                        </div>
                      </div>
                    ) : null}
                    <div className="box-border flex flex-wrap xl:min-w-max flex-row mt-4 justify-between">
                      <button
                        onClick={() => handleView(profile.cuid)}
                        className="my-1 mx-2 max-w-fit rounded-full bg-yellow-500 px-4 py-2 font-bold text-white text-base active:scale-90 hover:scale-110 hover:bg-yellow-400 disabled:opacity-75"
                      >
                        View
                      </button>
                      {profile.node_id === null || profile.node_id === '' ? (
                        <button
                          onClick={() => handleResend(profile.cuid)}
                          className="my-1 mx-2 max-w-fit rounded-full bg-amber-500 px-4 py-2 font-bold text-white text-base active:scale-90 hover:scale-110 hover:bg-yellow-400 disabled:opacity-75"
                          disabled={loading}
                        >
                          {loading ? 'Loading ..' : 'Resend'}
                        </button>
                      ) : null}
                      <button
                        onClick={() => handleModify(profile.cuid)}
                        className="my-1 mx-2 max-w-fit rounded-full bg-orange-500 px-4 py-2 font-bold text-white text-base active:scale-90 hover:scale-110 hover:bg-orange-400 disabled:opacity-75"
                        disabled={loading}
                      >
                        {loading ? 'Loading ..' : 'Modify'}
                      </button>
                      <button
                        onClick={() => handleDelete(profile.cuid)}
                        className="my-1 mx-2 max-w-fit rounded-full bg-red-500 px-4 py-2 font-bold text-white text-base active:scale-90 hover:scale-110 hover:bg-red-400 disabled:opacity-75"
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
                  <div className="text-white text-base mb-4">
                    Select the type of Profile you want to create and then
                    submit it to the Murmurations Index.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <dialog
          id="my_modal"
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur backdrop-filter bg-opacity-50"
        >
          <div className="w-96 h-auto bg-white rounded-lg shadow-lg">
            <form
              onClick={() => {
                setShowModal(false)
                setProfileErrors(null)
              }}
              className="p-6"
            >
              <h3 className="font-bold text-xl mb-4">Error Details</h3>
              <p className="text-gray-600 mb-4">
                {profileErrors ? JSON.stringify(profileErrors) : 'No errors'}
              </p>
              <div className="modal-action flex justify-end">
                <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300">
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      ) : null}
    </div>
  )
}
