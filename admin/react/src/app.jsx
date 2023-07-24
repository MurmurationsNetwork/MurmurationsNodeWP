import axios from 'redaxios'
import { GenerateForm } from '@murmurations/jsrfg'
import { generateSchemaInstance } from '@murmurations/jsig'
import { useEffect, useState } from 'react'
import { createId } from '@paralleldrive/cuid2'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [schema, setSchema] = useState('')
  const [profiles, setProfiles] = useState('')

  useEffect(() => {
    fetchProfiles()
  }, [])

  const fetchProfiles = () => {
    axios
      .get('http://localhost:8000/wp-json/murmurations-node/v1/profile')
      .then(response => setProfiles(response.data))
      .catch(error => console.error('Error fetching profiles:', error))
  }

  const fetchSchema = () => {
    setLoading(true)

    axios
      .get(
        'https://test-library.murmurations.network/v2/schemas/organizations_schema-v1.0.0'
      )
      .then(({ data }) => {
        // todo: use parseSchemas method
        // hotfix: I replaced the schema manually to make it work
        data.metadata.schema = ['organizations_schema-v1.0.0']
        setSchema(data)
      })
      .catch(() => {
        console.error('error fetching schema')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const formValues = {}
    formData.forEach((value, key) => {
      if (key !== 'profile_title') {
        formValues[key] = value
      }
    })

    const result = generateSchemaInstance(schema, formValues)
    const profileTitle = formData.get('profile_title')

    // call WordPress api to save the profile
    const newProfile = {
      cuid: createId(),
      title: profileTitle,
      linked_schemas: result.linked_schemas,
      profile: result
    }
    const url = 'http://localhost:8000/wp-json/murmurations-node/v1/profile'
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProfile)
    }

    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        console.log('Post successful! Response data:', data)
        setSchema('')
        fetchProfiles()
      })
      .catch(error => {
        console.error('Error posting data:', error)
      })
  }

  return (
    <div>
      <h3>Murmurations Profile Generator</h3>
      <button onClick={fetchSchema}>
        {loading ? 'Loading ..' : 'Load Org Schema'}
      </button>
      {schema && (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="profile_title">Profile Title:</label>
            <input type="text" name="profile_title" id="profile_title" />
            <GenerateForm schema={schema} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <h3>All profiles</h3>
      <ul>
        {profiles
          ? profiles.map(profile => <li key={profile.id}>{profile.title}</li>)
          : 'No profile'}
      </ul>
    </div>
  )
}
