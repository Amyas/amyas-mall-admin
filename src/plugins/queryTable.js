const queryTable = async function (requestor, ...query) {
  this.list.loading = true
  try {
    const { items, total } = await requestor(...query)
    this.list.data = items
    this.list.total = total
    return { items, total }
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
