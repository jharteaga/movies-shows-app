import { apiAxios, params } from './api'

export const getMovies = async (type, filter) => {
  try {
    const response = await apiAxios.get(`/${type}/${filter}`, { params })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getMovie = async (type, id) => {
  try {
    const response = await apiAxios.get(`/${type}/${id}`, { params })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const searchMovies = async (selected, query) => {
  try {
    const response = await apiAxios.get(`/search/${selected}`, {
      params: { ...params, query }
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
