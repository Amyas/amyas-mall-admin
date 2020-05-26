import Vue from 'vue'

import submitForm from './submitForm'
import queryTable from './queryTable'
import delRow from './delRow'
import permission from './permission'

Vue.use(queryTable)
Vue.use(submitForm)
Vue.use(delRow)
Vue.use(permission)
