import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '@/store'

import BaseLayout from '@/layouts/BaseLayout'

/* 登陆/注册 */const Sign = () => import(/* webpackChunkName: "sign" */ '@/views/Sign')
/* 注册 */const SignUp = () => import(/* webpackChunkName: "sign-up" */ '@/views/Sign/SignUp')
/* 登录 */const SignIn = () => import(/* webpackChunkName: "sign-in" */ '@/views/Sign/SignIn')

/* 首页 */const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard')

// fix vue-router NavigationDuplicated
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return VueRouterPush.call(this, location).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return VueRouterReplace.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

/**
 * @description 创建在layout中显示的异步路由
 * @param {Array} routes 动态路由
 */
export const createAsyncRoutes = (routes = []) => ([
  {
    path: '/',
    redirect: '/dashboard',
    component: BaseLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          icon: 'el-icon-stopwatch',
          title: '仪表盘'
        }
      },
      ...routes
    ]
  }
])

// 默认路由
export const defaultRoutes = [
  {
    path: '/sign',
    name: 'Sign',
    component: Sign,
    children: [
      {
        path: 'in',
        name: 'SignIn',
        component: SignIn,
        meta: {
          title: '登录'
        }
      },
      {
        path: 'up',
        name: 'SignUp',
        component: SignUp,
        meta: {
          title: '注册'
        }
      }
    ]
  }
]

// 基础路由
export const constantRoutes = createAsyncRoutes().concat(defaultRoutes)

/**
 * @description 创建路由
 * @param {Array} routes 路由设置
 */
const createRouter = (routes = []) => new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

// 导出路由 在 main.js 里使用
const router = createRouter(constantRoutes)

/**
 * @description 重新设置路由
 * @param {Array} routes 额外追加的路由
 */
export function resetRouter (routes = []) {
  const newRouter = createRouter(routes)
  router.matcher = newRouter.matcher
}

export default router

router.beforeEach(async (to, from, next) => {
  // 登陆页不走鉴权
  if (to.name === 'SignIn') return next()

  try {
    // 获取动态路由权限
    await Store.dispatch('permission/load', { to })
    next()
  } catch (error) {
    next(false)
  }
})
