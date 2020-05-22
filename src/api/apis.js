import service, { createCURD } from './service'

export default {
  auth: {
    signIn: data => service.post('/sign-in', data),
    signOut: () => service.post('/sign-out')
  },
  user: {
    ...createCURD('user')
  },
  goodsCate: {
    ...createCURD('goods-cate')
  },
  menu: {
    ...createCURD('menu')
  },
  role: {
    ...createCURD('role')
  }
}
