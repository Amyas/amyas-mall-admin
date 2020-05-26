import Apis from '@/api'
import { assert } from '@/utils'

const submitForm = async function (routeName, options = {}) {
  const {
    type,
    apiName,
    data
  } = options

  // 前置条件判断
  assert(routeName, 'submitForm', 'routeName is not defined.')
  assert(type, 'submitForm', 'type is not defined.')

  const api = apiName || type === 'add' ? 'create' : 'update'

  this.form.loading = true
  try {
    const res = await Apis[routeName][api](data)
    this.form.visible = false
    this.$notify({
      title: '成功',
      message: '表单提交成功',
      type: 'success'
    })
    this.$queryTable(routeName)
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
    this.form.loading = false
  }
}

export default function install (Vue) {
  Vue.prototype.$submitForm = submitForm
}
