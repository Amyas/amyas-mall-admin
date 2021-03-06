import router, {
  createAsyncRoutes,
  resetRouter,
  defaultRoutes
} from '@/router'
import asyncRoutes from '@/router/routes'
import utils from '@/utils'

export default {
  namespaced: true,
  state: {
    isLoaded: false,
    loadedRoutes: [],
    userMenu: [],
    flatUserMenu: []
  },
  mutations: {
    SET_LOADED (state, payload) {
      state.isLoaded = payload
    },
    SET_LOADED_ROUTES (state, payload) {
      state.loadedRoutes = payload
    },
    SET_USER_MENU (state, payload) {
      state.userMenu = payload
      state.flatUserMenu = utils.permission.flatRoutes(payload)
    }
  },
  actions: {
    async load ({ state, commit }, { to }) {
      // 已经加载过动态路由
      if (state.isLoaded) return

      // 通过接口获取动态路由
      const userMenu = await this.$apis.auth.userMenu()

      // 匹配需要显示的路由
      const filterRoutes = utils.permission.filterAsyncRoutes(userMenu, asyncRoutes)

      // 生成全部路由
      const routes = createAsyncRoutes(filterRoutes).concat(defaultRoutes)

      // 更新路由设置
      resetRouter(routes)

      // 更新加载状态
      commit('SET_LOADED', true)

      // 更新加载后的路由列表
      commit('SET_LOADED_ROUTES', routes)

      // 更新用户路由
      commit('SET_USER_MENU', userMenu)

      // 从哪里来回哪里去
      if (to) router.replace(to)
    }
  }
}
