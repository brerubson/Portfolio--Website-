const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

async function request(path) {
  const response = await fetch(`${API_URL}${path}`)

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