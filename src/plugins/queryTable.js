const queryTable = async function (requestor) {
  this.list.loading = true
  try {
    const res = await requestor()
    this.list.data = res
    this.list.total = res.length
    return res
  } catch (error) {
    this.$notify({
      title: '失败',
      message: '请求失败，请刷新重试',
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
