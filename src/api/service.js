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

/**
 * @description 创建增删改查
 * @param {String} route 路由名
 */
export const createCURD = (route) => ({
  list: params => service.get(`/${route}`, { params }),
  create: data => service.post(`/${route}`, data),
  update: ({ _id, ...args }) => service.put(`/${route}/${_id}`, args),
  delete: id => service.delete(`/${route}/${id}`)
})

export default service
