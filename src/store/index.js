import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    SET_STATE (state, { key, value }) {
      _.set(state, key, value)
    }
  },
  actions: {
  },
  modules: {
    user,
    permission
  }
})
