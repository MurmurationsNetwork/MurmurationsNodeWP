import axios from 'redaxios'
import { GenerateForm } from '@murmurations/jsrfg'
import { useState } from 'react'

const schemas = [
  { title: 'An Organization', name: 'organizations_schema-v1.0.0' },
  { title: 'A Person', name: 'cta_person-v0.1.0' },
  { title: 'An Offer or Want', name: 'offers_wants_prototype-v0.0.2' }
]

export default function App() {
  const [loading, setLoading] = useState(false)
  const [schema, setSchema] = useState('')

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

  return (
    <div className="bg-gray-50">
      <h1 className="text-2xl">Murmurations Profile Generator</h1>
      <h2 className="text-xl">What do you want to create a Profile for?</h2>
      <div className="mb-2 flex flex-row items-center px-2 py-1 md:mb-4 md:px-4 md:py-2">
        <div>
          <form method="post">
            <select
              className="block w-full border-2 border-gray-400 bg-white px-4 py-2 dark:bg-gray-700 md:w-96"
              id="schema"
              name="schema"
              multiple={false}
              required={true}
              size={6}
            >
              {schemas.map(schema => (
                <option
                  className="mb-1 border-gray-50 px-2 py-0 text-sm"
                  value={schema.name}
                  key={schema.name}
                >
                  {schema.title}
                </option>
              ))}
            </select>
          </form>
          <button
            className="mt-4 rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:scale-110 hover:bg-red-400 disabled:opacity-75"
            disabled={loading}
            onClick={() => handleSelectSchema()}
          >
            {loading ? 'Loading ..' : 'Select'}
          </button>
        </div>
        <div className="ml-8">
          <p>Profiles can show up on multiple aggregators.</p>
          <p>Example aggregators include:</p>
          <p>
            People are published in the Murmurations Directory.
            <br />
            Organizations are published in the Murmurations Map.
            <br />
            Offers and Wants are published in the Murmurations Marketplace.
          </p>
        </div>
      </div>
      <div className="box-border flex flex-col md:flex-row">
        <div className="inset-0 basis-full md:sticky md:top-0 md:h-screen md:basis-1/2 md:overflow-y-auto">
          {schema && (
            <div>
              <h2 className="text-xl">
                Fill in the fields below to create a Profile
              </h2>
              <GenerateForm schema={schema} />
            </div>
          )}
        </div>
        <div className="mx-2 basis-full px-2 py-4 md:basis-1/2 md:px-4">
          My Profiles
        </div>
      </div>
    </div>
  )
}
