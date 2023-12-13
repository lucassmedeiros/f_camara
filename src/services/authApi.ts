import Axios from 'axios'

const api = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_AUTH_URL,
  timeout: 15000
})

export default api
