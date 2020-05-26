import Apis from '@/api'
import { assert } from '@/utils'

/**
 * @description 删除指定行
 * @param {String} 路由名
 * @param {Number | String} 指定行的id
 */
const delRow = async function (routeName, id) {
  // 前置条件判断
  assert(routeName, 'delRow', 'routeName is not defined.')

  try {
    await Apis[routeName].delete(id)
    this.$queryTable(routeName)
    this.$notify({
      title: '成功',
      message: '删除成功',
      type: 'error'
    })
  } catch (error) {
    console.error(error)
    this.$notify({
      title: '失败',
      message: error.status.message,
      type: 'error'
    })
    throw error
  }
}

export default function install (Vue) {
  Vue.prototype.$delRow = delRow
}
