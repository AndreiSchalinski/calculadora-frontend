
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

export default api
