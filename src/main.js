import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'

import apis from '@/api'

import '@/scss/index.scss'

import '@/plugins'

import BaseListLayout from '@/layouts/BaseListLayout'
import BaseTable from '@/components/BaseTable'
import BaseForm from '@/components/BaseForm'

sync(store, router)

Vue.use(ElementUI)
Vue.use(apis)

store.$apis = apis

Vue.component('BaseListLayout', Vue.extend(BaseListLayout))
Vue.component('BaseTable', Vue.extend(BaseTable))
Vue.component('BaseForm', Vue.extend(BaseForm))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
