import { apiAxios, params } from './api'

export const getPopularMovies = async () => {
  try {
    const response = await apiAxios.get('/movie/popular', { params })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
