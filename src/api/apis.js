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
  },
  goodsCate: {
    list: params => service.get('/goods-cate', { params }),
    create: data => service.post('/goods-cate', data),
    update: ({ _id, ...args }) => service.put(`/goods-cate/${_id}`, args),
    delete: id => service.delete(`/goods-cate/${id}`)
  },
  menu: {
    list: params => service.get('/menu', { params }),
    create: data => service.post('/menu', data),
    update: ({ _id, ...args }) => service.put(`/menu/${_id}`, args),
    delete: id => service.delete(`/menu/${id}`)
  }
}
