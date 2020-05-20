import BaseEmptyRoute from '@/layouts/BaseEmptyRoute'

/* 商品分类 */const GoodsCate = () => import(/* webpackChunkName: "goods-cate" */ '@/views/GoodsCate')
/* 商品 */const Goods = () => import(/* webpackChunkName: "goods" */ '@/views/Goods')

/* 用户 */const User = () => import(/* webpackChunkName: "user" */ '@/views/System/User')
/* 菜单 */const Menu = () => import(/* webpackChunkName: "menu" */ '@/views/System/Menu')
/* 角色 */const Role = () => import(/* webpackChunkName: "role" */ '@/views/System/Role')

// 异步路由
export default [
  // 系统管理
  {
    path: '/system',
    name: 'System',
    component: BaseEmptyRoute,
    meta: {
      icon: 'el-icon-user',
      title: '系统管理'
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: User,
        meta: {
          icon: 'el-icon-user',
          title: '用户管理'
        }
      },
      {
        path: 'menu',
        name: 'Menu',
        component: Menu,
        meta: {
          icon: 'el-icon-user',
          title: '菜单管理'
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: Role,
        meta: {
          icon: 'el-icon-user',
          title: '角色管理'
        }
      }
    ]
  },
  // 商品分类管理
  {
    path: '/goods-cate',
    name: 'GoodsCate',
    component: GoodsCate,
    meta: {
      icon: 'el-icon-stopwatch',
      title: '商品分类管理'
    }
  },
  // 商品管理
  {
    path: '/goods',
    name: 'Goods',
    component: Goods,
    meta: {
      icon: 'el-icon-stopwatch',
      title: '商品管理'
    }
  }
]
