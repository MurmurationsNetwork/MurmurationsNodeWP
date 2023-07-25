import axios from 'redaxios'
import { GenerateForm } from '@murmurations/jsrfg'
import { generateSchemaInstance } from '@murmurations/jsig'
import { useEffect, useState } from 'react'
import { createId } from '@paralleldrive/cuid2'

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

        setSchema('')
        await fetchProfiles()
      }
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

  // todo: simple style to display the profile
  const profileStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px'
  }

  return (
    <div>
      <h3>Murmurations Profile Generator</h3>
      <button onClick={() => handleLoadSchema(false)}>
        {loading ? 'Loading ..' : 'Load Org Schema'}
      </button>
      {schema && (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="profile_title">Profile Title:</label>
            <input
              type="text"
              name="profile_title"
              id="profile_title"
              defaultValue={profileData ? profileData.title : ''}
            />
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
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <h3>All profiles</h3>
      {profiles && profiles.length > 0 ? (
        profiles.map(profile => (
          <div key={profile.id} style={profileStyle}>
            <h3>Name: {profile.title}</h3>
            <h3>
              {profile.linked_schemas && profile.linked_schemas.length > 0
                ? 'Type: ' + profile.linked_schemas.join('/')
                : 'Type: No linked schemas'}
            </h3>
            <h3>Last Updated: {profile.updated_at}</h3>
            <button onClick={() => handleView(profile.cuid)}>View</button>
            <button onClick={() => handleModify(profile.cuid)}>Modify</button>
            <button onClick={() => handleDelete(profile.cuid)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No profiles</p>
      )}
    </div>
  )
}
