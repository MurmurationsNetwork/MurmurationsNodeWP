import { apiUrl } from '../data/config'

// eslint-disable-next-line no-undef
const wp_nonce = murmurations_node.wp_nonce

export const getProfiles = async env => {
  return await fetch(`${apiUrl}/profile?env=${env}&_wpnonce=${wp_nonce}`)
}

export const saveProfile = async profile => {
  return await fetchRequest(
    `${apiUrl}/profile?_wpnonce=${wp_nonce}`,
    'POST',
    profile
  )
}

export const updateProfile = async (cuid, profile) => {
  return await fetchRequest(
    `${apiUrl}/profile/${cuid}?_wpnonce=${wp_nonce}`,
    'PUT',
    profile
  )
}

export const deleteProfile = async (cuid, indexUrl) => {
  return await fetchRequest(
    `${apiUrl}/profile/${cuid}?_wpnonce=${wp_nonce}`,
    'DELETE',
    {
      index_url: indexUrl
    }
  )
}

export const getProfileDetails = async cuid => {
  return fetch(`${apiUrl}/profile-detail/${cuid}?_wpnonce=${wp_nonce}`)
}

export const resendProfile = async (indexUrl, cuid) => {
  return await fetchRequest(
    `${apiUrl}/profile/resend/${cuid}?_wpnonce=${wp_nonce}`,
    'POST',
    {
      index_url: indexUrl
    }
  )
}

export const updateNodeId = async (cuid, nodeId) => {
  return await fetchRequest(
    `${apiUrl}/profile/update-node-id/${cuid}?_wpnonce=${wp_nonce}`,
    'PUT',
    {
      node_id: nodeId
    }
  )
}

export const updateDeletedAt = async cuid => {
  return await fetchRequest(
    `${apiUrl}/profile/update-deleted-at/${cuid}?_wpnonce=${wp_nonce}`,
    'PUT'
  )
}

export const validateProfile = async (indexUrl, profile) => {
  return await fetchRequest(`${indexUrl}/validate`, 'POST', profile)
}

const fetchRequest = async (url, method, body) => {
  try {
    return await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  } catch (error) {
    alert(`Fetch Request error: ${error}`)
  }
}
