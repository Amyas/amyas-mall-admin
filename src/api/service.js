import axios from 'axios'
import Router from '@/router'

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
  if (error.response.status === 401) {
    Router.replace('/sign/in')
  }
  return Promise.reject(error.response.data)
})

export default service
