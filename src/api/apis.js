import service from './service'

export default {
  auth: {
    signIn: data => service.post('/sign-in', data),
    signOut: () => service.post('/sign-out')
  },
  user: {
    list: params => service.get('/user', { params }),
    create: data => service.post('/user', data),
    update: ({ _id, ...args }) => service.put(`/user/${_id}`, args),
    delete: id => service.delete(`/user/${id}`)
  }
}
