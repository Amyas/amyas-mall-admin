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

    <ElFormItem
      label="菜单权限:"
      size="small"
      prop="role_menu">
      <TreeSelect
        multiple
        :options="menuList"
        :normalizer="normalizer"
        value-consists-of="ALL_WITH_INDETERMINATE"
        :default-expand-level="0"
        placeholder="请选择上级菜单"
        v-model="form.data.role_menu" />
    </ElFormItem>

  </BaseForm>
</template>
<script>
export default {
  props: {
    form: {
      type: Object,
      required: true
    },
    menuList: {
      type: Array,
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
  },
  methods: {
    normalizer (node) {
      return {
        id: node._id,
        label: node.menu_name,
        children: node.children
      }
    }
  }
}
</script>
