import api from '../services/api'

export const fetchUsers = async () => {
  try {
    const { data } = await api.get('/users?page=2')

    return data
  } catch (error) {
    return {}
  }
}

export const fetchUser = async (id) => {
  try {
    const { data } = await api.get(`/users/${id}`)

    return data
  } catch (error) {
    return {}
  }
}