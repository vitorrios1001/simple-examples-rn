import api from '../services/api'

export const fetchUsers = async (page) => {
  try {
    const { data } = await api.get(`/users?page=${page}`)

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