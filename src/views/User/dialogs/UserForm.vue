<template>
  <BaseForm
    type="template"
    :title="formatTitle"
    :visible.sync="form.visible"
    :form="form"
    @submit-form="$emit('submit')">

    <ElFormItem
      label="账号"
      size="small"
      prop="username">
      <ElInput :disabled="isDisabled" v-model="form.data.username" />
    </ElFormItem>

    <ElFormItem
      label="密码"
      size="small"
      prop="password">
      <ElInput v-model="form.data.password" />
    </ElFormItem>

    <ElFormItem
      label="昵称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" />
    </ElFormItem>

  </BaseForm>
</template>
<script>
export default {
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  computed: {
    formatTitle () {
      const title = '用户'
      const prefix = this.form.type === 'add' ? '新增' : '编辑'
      return prefix + title
    },
    isDisabled () {
      return this.form.type === 'edit'
    }
  }
}
</script>
