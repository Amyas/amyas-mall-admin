import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true
})

service.interceptors.response.use(response => {
  if (response.data.status.errCode !== -1) {
    return Promise.reject(response.data)
  }
  return response.data.data
}, error => {
  return Promise.reject(error.response.data)
})

export default service
