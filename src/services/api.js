import axios from 'axios'
import qs from 'qs'
import { API_KEY, BASE_URL } from '../config/apiConfig'

const params = {
  api_key: API_KEY
}

const apiAxios = axios.create({
  baseURL: BASE_URL,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
})

export { apiAxios, params }
