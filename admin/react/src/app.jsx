import axios from 'redaxios'
import { GenerateForm } from '@murmurations/jsrfg'
import { generateSchemaInstance } from '@murmurations/jsig'
import { useEffect, useState } from 'react'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [schema, setSchema] = useState('')
  const [profiles, setProfiles] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:8000/wp-json/murmurations-node/v1/profile')
      .then(response => setProfiles(response.data))
      .catch(error => console.error('Error fetching profiles:', error))
  }, [])

  const fetchSchema = () => {
    setLoading(true)

    axios
      .get(
        'https://test-library.murmurations.network/v2/schemas/organizations_schema-v1.0.0'
      )
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

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const formValues = {}
    formData.forEach((value, key) => {
      formValues[key] = value
    })
    const result = generateSchemaInstance(schema, formValues)
    console.log(result)
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
