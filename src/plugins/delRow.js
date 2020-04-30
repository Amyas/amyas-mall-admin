const delRow = async function (requestor, id) {
  try {
    await requestor(id)
    this.$queryTable(this.$apis.user.list, this.$route.query)
    this.$notify({
      title: '成功',
      message: '删除成功',
      type: 'error'
    })
  } catch (error) {
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
