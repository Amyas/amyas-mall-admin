const submitForm = async function (options = {}) {
  const {
    type,
    apis,
    data
  } = options
  this.form.loading = true
  try {
    const requestor = type === 'add' ? apis.create : apis.update
    const res = await requestor(data)
    this.form.visible = false
    this.$notify({
      title: '成功',
      message: '表单提交成功',
      type: 'success'
    })
    this.$queryTable(apis.list, this.$route.query)
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
