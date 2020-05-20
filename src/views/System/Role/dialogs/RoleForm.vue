<template>
  <BaseForm
    type="template"
    :title="formatTitle"
    :visible.sync="form.visible"
    :form="form"
    @submit-form="$emit('submit')">

    <ElFormItem
      label="角色名称"
      size="small"
      prop="role_name">
      <ElInput v-model="form.data.role_name" />
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
      const title = '角色'
      const prefix = this.form.type === 'add' ? '新增' : '编辑'
      return prefix + title
    },
    isDisabled () {
      return this.form.type === 'edit'
    }
  }
}
</script>
