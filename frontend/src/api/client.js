/**
 * API client — wraps fetch calls to the Django backend.
 * Base URL is read from VITE_API_BASE_URL (falls back to /api for production).
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

async function request(method, path, body) {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  }
  if (body) {
    options.body = JSON.stringify(body)
  }

  const res = await fetch(`${BASE_URL}${path}`, options)
  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data?.message || 'Request failed')
    error.status = res.status
    error.data = data
    throw error
  }

  return data
}

export const api = {
  contact: {
    submit: (payload) => request('POST', '/contact/', payload),
  },
  services: {
    list: () => request('GET', '/services/'),
  },
  projects: {
    list: (service) =>
      request('GET', `/projects/${service ? `?service=${service}` : ''}`),
  },
}
