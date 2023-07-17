import axios from 'redaxios'
import { GenerateForm } from '@murmurations/jsrfg'
import { useState } from 'react'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [schema, setSchema] = useState('')

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

  return (
    <div>
      <h1 className="text-2xl">Murmurations Profile Generator</h1>
      <button className="border border-black p-1" onClick={fetchSchema}>
        {loading ? 'Loading ..' : 'Load Org Schema'}
      </button>
      {schema && (
        <div>
          <GenerateForm schema={schema} />
        </div>
      )}
    </div>
  )
}
