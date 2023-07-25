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
  const apiUrl = `${wordpressUrl}/wp-json/murmurations-node/v1`

  const [loading, setLoading] = useState(false)
  const [schema, setSchema] = useState('')
  const [profiles, setProfiles] = useState('')
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    fetchProfiles().then(() => {
      console.log('Profiles fetched')
    })
  }, [])

  const fetchProfiles = async () => {
    try {
      const response = await axios.get(`${apiUrl}/profile`)
      setProfiles(response.data)
    } catch (error) {
      console.error('Error fetching profiles:', error)
    }
  }

  const handleSelectSchema = () => {
    const schema = document.getElementById('schema').value
    if (schema === '') {
      return
    }
    setLoading(true)
    axios
      .get(`https://test-library.murmurations.network/v2/schemas/${schema}`)
      .then(({ data }) => {
        setSchema(data)
      })
      .catch(() => {
        console.error('error fetching schema')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleLoadSchema = async isModify => {
    setLoading(true)
    setSchema('')
    if (!isModify) {
      setProfileData(null)
    }

    try {
      const { data } = await axios.get(
        'https://test-library.murmurations.network/v2/schemas/organizations_schema-v1.0.0'
      )
      // todo: use parseSchemas method
      // hotfix: I replaced the schema manually to make it work
      data.metadata.schema = ['organizations_schema-v1.0.0']
      setSchema(data)
    } catch (error) {
      console.error('Error fetching schema:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async event => {
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
        const profileToUpdate = {
          cuid: formData.get('cuid'),
          title: profileTitle,
          linked_schemas: result.linked_schemas,
          profile: result
        }
        const requestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(profileToUpdate)
        }

        const response = await fetch(`${apiUrl}/profile`, requestOptions)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log('Update successful! Response data:', data)
      } else {
        const newProfile = {
          cuid: createId(),
          title: profileTitle,
          linked_schemas: result.linked_schemas,
          profile: result
        }

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProfile)
        }

        const response = await fetch(`${apiUrl}/profile`, requestOptions)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log('Post successful! Response data:', data)
      }
      setSchema('')
      await fetchProfiles()
    } catch (error) {
      console.error('Error updating/posting profile:', error)
    }
  }

  const handleView = cuid => {
    window.open(`${apiUrl}/profile/${cuid}`, '_blank')
  }

  const handleModify = async cuid => {
    setLoading(true)
    setSchema('')

    try {
      const response = await axios.get(`${apiUrl}/profile-detail/${cuid}`)
      setProfileData(response.data)
      // todo: we need to fetchSchema according to the linked_schemas
      await handleLoadSchema(true)
    } catch (error) {
      console.error('Error modifying profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async cuid => {
    setLoading(true)

    try {
      await axios.delete(`${apiUrl}/profile/${cuid}`)
      await fetchProfiles()
    } catch (error) {
      console.error('Error deleting profile:', error)
    } finally {
      setLoading(false)
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
            onClick={() => handleSelectSchema()}
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
                Profile Title::<span className="jsrfg-required"> *</span>
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
                  <input type="hidden" name="cuid" value={profileData.cuid} />
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
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="basis-full px-2 py-2 md:basis-2/5 md:px-4 md:py-4 text-xl">
          My Profiles
          <div className="box-border flex flex-col md:flex-row mt-8">
            <div className="basis-1/2 bg-orange-300 rounded-t-md mr-1 p-2 text-white text-center">
              Test Index
            </div>
            <div className="basis-1/2 bg-orange-400 rounded-t-md ml-1 p-2 text-white text-center">
              Live Index
            </div>
          </div>
          <div className="bg-orange-300 rounded-b-md p-4">
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
                        ? profile.linked_schemas.join('/')
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
                      onClick={() => handleModify(profile.cuid)}
                      className="my-2 mx-4 rounded-full bg-orange-500 px-4 py-2 font-bold text-white active:scale-90 hover:scale-110 hover:bg-orange-400 disabled:opacity-75"
                    >
                      Modify
                    </button>
                    <button
                      onClick={() => handleDelete(profile.cuid)}
                      className="my-2 mx-4 rounded-full bg-red-500 px-4 py-2 font-bold text-white active:scale-90 hover:scale-110 hover:bg-red-400 disabled:opacity-75"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No Profiles</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
