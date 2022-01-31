import { apiAxios, params } from './api'

export const getMovies = async (filter) => {
  try {
    const response = await apiAxios.get(`/movie/${filter}`, { params })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getMovie = async (id) => {
  try {
    const response = await apiAxios.get(`/movie/${id}`, { params })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
