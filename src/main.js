import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'

// 接口
import apis from '@/api'

// 公用样式
import '@/scss/index.scss'

// 插件
import '@/plugins'

import BaseListLayout from '@/layouts/BaseListLayout'
import BaseTable from '@/components/BaseTable'
import BaseForm from '@/components/BaseForm'

import TreeSelect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

sync(store, router)

Vue.use(ElementUI)
Vue.use(apis)

store.$apis = apis

Vue.component('BaseListLayout', Vue.extend(BaseListLayout))
Vue.component('BaseTable', Vue.extend(BaseTable))
Vue.component('BaseForm', Vue.extend(BaseForm))
Vue.component('TreeSelect', Vue.extend(TreeSelect))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
