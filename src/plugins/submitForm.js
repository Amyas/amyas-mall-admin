const submitForm = async function (requestor, data) {
  this.form.loading = true
  try {
    const res = await requestor(data)
    this.form.visible = false
    this.$notify({
      title: '成功',
      message: '表单提交成功',
      type: 'success'
    })
    this.$queryTable(this.$apis.user.list, this.$route.query)
    return res
  } catch (error) {
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
