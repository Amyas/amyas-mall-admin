const delRow = async function (id, apis) {
  try {
    await apis.delete(id)
    this.$queryTable(apis.list, this.$route.query)
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
