const submitForm = async function (requestor) {
  this.form.loading = true
  try {
    const res = await requestor()
    this.form.visible = false
    this.$notify({
      title: '成功',
      message: '表单提交成功',
      type: 'success'
    })
    return res
  } catch (error) {
    this.$notify({
      title: '失败',
      message: '表单提交失败，请重试',
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
