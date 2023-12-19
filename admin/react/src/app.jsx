import { GenerateForm } from '@murmurations/jsrfg'
import { generateSchemaInstance, parseSchemas } from '@murmurations/jsig'
import { useEffect, useRef, useState } from 'react'
import { createId } from '@paralleldrive/cuid2'
import * as api from './utils/api'
import { defaultProfile } from './data/defaultProfile'
import * as config from './data/config'
import { schemas } from './data/schemas'

export default function App() {
  const [env, setEnv] = useState('test')
  const [indexUrl, setIndexUrl] = useState(config.testIndexUrl)
  const [libraryUrl, setLibraryUrl] = useState(config.testLibraryUrl)
  const [loading, setLoading] = useState(false)
  const [schema, setSchema] = useState(null)
  const [profiles, setProfiles] = useState(null)
  const [profileData, setProfileData] = useState(null)
  const [validationErrors, setValidationErrors] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [profileErrors, setProfileErrors] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteProfileId, setDeleteProfileId] = useState(null)

  const errorContainerRef = useRef(null)

  useEffect(() => {
    fetchProfiles(env).then(() => {
      setSchema(null)
      console.log(`Profiles fetched from ${env} environment`)
    })
  }, [env])

  const setTestEnv = async () => {
    setEnv('test')
    setIndexUrl(config.testIndexUrl)
    setLibraryUrl(config.testLibraryUrl)
  }

  const setProductionEnv = async () => {
    setEnv('production')
    setIndexUrl(config.productionIndexUrl)
    setLibraryUrl(config.productionLibraryUrl)
  }

  const fetchProfiles = async environment => {
    try {
      const response = await api.getProfiles(environment)
      const responseData = await response.json()

      if (!response.ok) {
        if (response.status === 404) {
          setProfiles(null)
          return
        }

        alert(
          `Error fetching profiles with response: ${JSON.stringify(
            responseData
          )}`
        )
        return
      }

      setProfiles(responseData)
    } catch (error) {
      alert(`Error fetching profiles: ${error}`)
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

  const handleSelectSchema = async (isNew, selectedSchema) => {
    setLoading(true)
    setSchema(null)

    // if the profile is new, set the default primary url and schema
    if (isNew) {
      setProfileData(defaultProfile)
      selectedSchema = document.getElementById('schema').value
    }

    if (selectedSchema === '') {
      alert('Please select a schema')
      setLoading(false)
      return
    }

    try {
      const responseData = await parseSchemas(`${libraryUrl}/schemas`, [
        selectedSchema
      ])
      setSchema(responseData)
    } catch (error) {
      alert(`Error fetching schema: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async event => {
    setLoading(true)

    event.preventDefault()
    const formData = new FormData(event.target)
    let rawData = {}

    for (let key of formData.keys()) {
      if (key !== 'profile_title' && key !== 'cuid') {
        rawData[key] = formData.getAll(key)
      }
    }

    const result = generateSchemaInstance(schema, rawData)
    const profileTitle = formData.get('profile_title')

    // validate the profile before submitting
    setValidationErrors(null)
    try {
      const response = await api.validateProfile(indexUrl, result)
      if (!response.ok) {
        const responseData = await response.json()
        setValidationErrors(responseData.errors)
        // scroll to the error container to make it visible
        errorContainerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        setLoading(false)
        return
      }
    } catch (error) {
      alert(`Error while validating data: ${error}`)
      setLoading(false)
    }

    // submit has two modes: create and update
    const method = formData.has('cuid') ? 'PUT' : 'POST'

    try {
      let cuid, response
      let profile = {
        title: profileTitle,
        linked_schemas: result.linked_schemas,
        profile: result,
        env: env,
        index_url: indexUrl
      }

      // call WordPress api to save the profile
      if (method === 'PUT') {
        cuid = formData.get('cuid')
        response = await api.updateProfile(cuid, profile)
      } else {
        cuid = createId()
        profile.cuid = cuid
        response = await api.saveProfile(profile)
      }

      const responseData = await response.json()
      if (!response.ok) {
        alert(
          `Error saving profile with response: ${JSON.stringify(responseData)}`
        )
        setLoading(false)
        setSchema(null)
        await fetchProfiles(env)
        return
      }
      console.log('Update successful! Response data:', responseData)

      setSchema(null)
      await fetchProfiles(env)
    } catch (error) {
      if (method === 'PUT') {
        alert(`Error updating profile: ${error}`)
      } else {
        alert(`Error posting profile: ${error}`)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleView = cuid => {
    window.open(`${config.apiUrl}/profile/${cuid}`, '_blank')
  }

  const handleModify = async cuid => {
    setLoading(true)
    setSchema(null)

    try {
      const response = await api.getProfileDetails(cuid)
      let responseData = await response.json()
      if (
        responseData.profile.primary_url == null ||
        responseData.profile.primary_url === ''
      ) {
        responseData.profile.primary_url = config.wordpressUrl
      }
      setProfileData(responseData)
      // todo: we need to fetchSchema according to the linked_schemas
      await handleSelectSchema(false, responseData.linked_schemas[0])
    } catch (error) {
      alert(`Error modifying profile: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async cuid => {
    setLoading(true)
    setSchema(null)

    try {
      const response = await api.resendProfile(indexUrl, cuid)
      const responseData = await response.json()
      if (!response.ok) {
        alert(
          `Error resending profile with response: ${JSON.stringify(
            responseData
          )}`
        )
        setLoading(false)
        return
      }
      console.log('Resend successful! Response data:', responseData)

      await fetchProfiles(env)
    } catch (error) {
      console.error('Error resending profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async cuid => {
    setLoading(true)
    setSchema(null)

    try {
      const response = await api.deleteProfile(cuid, indexUrl)
      const responseData = await response.json()

      if (!response.ok && responseData.code !== 'index_delete_failed') {
        alert(`Error deleting profile: ${JSON.stringify(responseData)}`)
        setLoading(false)
        return
      }

      await fetchProfiles(env)
    } catch (error) {
      alert(`Error deleting profile: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e, callback) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      callback()
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
        <button
          className="cursor-pointer basis-1/2 bg-orange-300 rounded-t-md mr-1 p-2 text-white text-center"
          onClick={() => setTestEnv()}
          tabIndex={0}
          onKeyDown={e => handleKeyDown(e, setTestEnv)}
        >
          <span
            className={`${
              env === 'test' ? 'font-bold text-2xl' : 'font-light align-middle'
            }`}
          >
            Test Index
          </span>
        </button>
        <button
          className="cursor-pointer basis-1/2 bg-orange-400 rounded-t-md ml-1 p-2 text-white text-center"
          onClick={() => setProductionEnv()}
          tabIndex={0}
          onKeyDown={e => handleKeyDown(e, setProductionEnv)}
        >
          <span
            className={`${
              env !== 'test' ? 'font-bold text-2xl' : 'font-light align-middle'
            }`}
          >
            Live Index
          </span>
        </button>
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
              onClick={() => handleSelectSchema(true)}
            >
              Select
            </button>
          </div>
          <div className="mt-8 lg:mt-0 xl:px-4 basis-full lg:basis-2/5 text-base">
            <div>
              The Murmurations Map displays{' '}
              <a
                href={
                  env === 'test'
                    ? config.testMapUrl + schemas[0].name
                    : config.productionMapUrl + schemas[0].name
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
                    ? config.testMapUrl + schemas[1].name
                    : config.productionMapUrl + schemas[1].name
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
                    ? config.testMapUrl + schemas[2].name
                    : config.productionMapUrl + schemas[2].name
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
        <div className="box-border flex flex-col xl:flex-row">
          <div className="inset-0 basis-full pr-4 py-2 md:py-4 top-0 lg:basis-3/5 md:overflow-y-auto">
            {schema && (
              <div>
                <div ref={errorContainerRef}>
                  {validationErrors ? (
                    <div className="mt-0 mb-4 flex flex-col lg:flex-row items-start py-1 md:py-2">
                      <div className="basis-full">
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                          <strong className="font-bold text-lg">
                            Validation Failed!
                          </strong>
                          <ul>
                            {validationErrors.map((error, index) => (
                              <li
                                key={index}
                                className="leading-none text-base"
                              >
                                Title: {error.title}, Status: {error.status},
                                Source: {error.source.pointer}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
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
                      Please only publish genuine profiles to the Live Index.
                      For testing use the Test Index.
                    </div>
                  )}
                  <button
                    className="m-4 rounded-full bg-orange-500 px-4 py-2 font-bold text-white text-lg active:scale-90 hover:scale-110 hover:bg-orange-400 disabled:opacity-75"
                    type="submit"
                    disabled={loading}
                  >
                    {env === 'test'
                      ? 'Submit to Test Index'
                      : 'Submit to Live Index'}
                  </button>
                </form>
              </div>
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
                    key={profile.cuid}
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
                          Resend
                        </button>
                      ) : null}
                      <button
                        onClick={() => handleModify(profile.cuid)}
                        className="my-1 mx-2 max-w-fit rounded-full bg-orange-500 px-4 py-2 font-bold text-white text-base active:scale-90 hover:scale-110 hover:bg-orange-400 disabled:opacity-75"
                        disabled={loading}
                      >
                        Modify
                      </button>
                      <button
                        onClick={() => {
                          // handleDelete(profile.cuid)
                          setDeleteProfileId(profile.cuid)
                          setShowDeleteModal(true)
                        }}
                        className="my-1 mx-2 max-w-fit rounded-full bg-red-500 px-4 py-2 font-bold text-white text-base active:scale-90 hover:scale-110 hover:bg-red-400 disabled:opacity-75"
                        disabled={loading}
                      >
                        Delete
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

      {loading ? (
        <dialog className="inset-0 z-40 flex items-center justify-center">
          <div className="bg-yellow-100 p-8 rounded shadow-xl">
            <p className="text-2xl text-center mb-4">Processing...</p>
            <p className="text-xl text-center mt-4">
              Murmurations is an unfunded volunteer-led project.
              <br />
              Please consider{' '}
              <a
                href="https://opencollective.com/murmurations"
                target="_blank"
                className="text-blue-500 underline"
                rel="noreferrer"
              >
                making a donation
              </a>{' '}
              to support development.
            </p>
          </div>
        </dialog>
      ) : null}
      {showModal && !loading ? (
        <dialog className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur backdrop-filter bg-opacity-50">
          <div className="w-96 h-auto bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h3 className="font-bold text-xl mb-4">Error Details</h3>
              <p className="text-gray-600 mb-4 break-all">
                {profileErrors ? JSON.stringify(profileErrors) : 'No errors'}
              </p>
              <div className="modal-action flex justify-end">
                <button
                  onClick={() => {
                    setShowModal(false)
                    setProfileErrors(null)
                  }}
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </dialog>
      ) : null}
      {showDeleteModal && !loading ? (
        <dialog className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur backdrop-filter bg-opacity-50">
          <div className="w-96 h-auto bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h3 className="font-bold text-xl mb-4">
                Are you sure you want to delete this profile?
              </h3>
              <div className="modal-action flex justify-between">
                <button
                  onClick={() => {
                    handleDelete(deleteProfileId).then(() => {
                      setShowDeleteModal(false)
                      setDeleteProfileId(null)
                    })
                  }}
                  className="mt-4 rounded-full bg-red-500 px-4 py-2 font-bold text-lg text-white hover:scale-110 hover:bg-red-400"
                >
                  Confirm Delete
                </button>
                <button
                  onClick={() => {
                    setShowDeleteModal(false)
                    setDeleteProfileId(null)
                  }}
                  className="mt-4 rounded-full bg-yellow-500 px-4 py-2 font-bold text-lg text-white hover:bg-yellow-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </dialog>
      ) : null}
    </div>
  )
}
