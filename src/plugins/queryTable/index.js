import Apis from '@/api'
import { assert } from '@/utils'

const queryTable = async function (routeName, options = {}) {
  const {
    apiName = 'list',
    query = {}
  } = options

  // 前置条件判断
  assert(routeName, 'queryTable', 'routeName is not defined.')

  // 将路由的query和传进来的query拼接
  const querys = Object.assign({}, this.$route.query, query)

  this.list.loading = true
  try {
    const res = await Apis[routeName][apiName](querys)
    this.list.data = res.items
    this.list.total = res.total
    return res
  } catch (error) {
    console.error(error)
    this.$notify({
      title: '失败',
      message: error.status.message,
      type: 'error'
    })
    throw error
  } finally {
    this.list.loading = false
  }
}

export default function install (Vue) {
  Vue.prototype.$queryTable = queryTable
}
