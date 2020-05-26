export default {
  methods: {
    /**
     * @description 表单-新增
     * @param {Object} data 表单数据
     */
    async formAdd (data) {
      data = _.cloneDeep(data)
      if (this.addBefore) {
        await this.addBefore(data)
      }
      this.form.data = data
      this.form.visible = true
      this.form.type = 'add'
    },
    /**
     * @description 表单-编辑
     * @param {Object} data 表单编辑
     */
    async formEdit (data) {
      data = _.cloneDeep(data)
      if (this.editBefore) {
        await this.editBefore(data)
      }
      this.form.data = data
      this.form.visible = true
      this.form.type = 'edit'
    },
    /**
     * @description 表单-提交
     * @param {String} routeName 路由名
     * @param {Object} 表单数据
     */
    async formSubmit (routeName, data) {
      const { type } = this.form
      data = _.cloneDeep(data)
      if (this.submitBefore) {
        await this.submitBefore(type, data)
      }
      this.$submitForm(routeName, {
        type,
        data
      })
    }
  }
}
