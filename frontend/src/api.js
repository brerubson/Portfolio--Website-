const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

async function request(path, options) {
  const response = await fetch(`${API_URL}${path}`, options)

  if (!response.ok) {
    const error = new Error('Request failed')
    error.status = response.status
    throw error
  }

  return response.json()
}

export const getProjects = () => request('/projects')
export const getProject = (id) => request(`/projects/${id}`)
export const getExperience = () => request('/experience')

export const sendMessage = (payload) =>
  request('/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })