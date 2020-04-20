import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'

import BaseListLayout from '@/layouts/BaseListLayout'

import '@/scss/index.scss'

sync(store, router)

Vue.component('ListLayout', Vue.extend(BaseListLayout))

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
