<template>
  <BaseForm
    type="template"
    :title="formatTitle"
    :visible.sync="form.visible"
    :form="form"
    @submit-form="$emit('submit')">

    <ElFormItem
      label="上级菜单:"
      size="small"
      prop="_parent">
      <TreeSelect
        :options="list"
        :normalizer="normalizer"
        :default-expand-level="0"
        placeholder="请选择上级菜单"
        v-model="form.data._parent" />
    </ElFormItem>

    <ElFormItem
      label="菜单名称:"
      size="small"
      prop="menu_name">
      <ElInput v-model="form.data.menu_name" placeholder="请填写菜单名称" />
    </ElFormItem>

    <ElFormItem
      label="菜单类型:"
      size="small"
      prop="menu_type">
      <ElRadioGroup v-model="form.data.menu_type">
        <ElRadioButton label="menu">菜单</ElRadioButton>
        <ElRadioButton label="button">按钮</ElRadioButton>
      </ElRadioGroup>
    </ElFormItem>

    <ElFormItem
      label="权限标识:"
      size="small"
      prop="permission_tag">
      <ElInput v-model="form.data.permission_tag" placeholder="请填写权限标识" />
    </ElFormItem>

    <ElFormItem
      label="路由名称:"
      size="small"
      prop="route_name">
      <ElInput v-model="form.data.route_name" placeholder="请填写路由名称" />
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
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    formatTitle () {
      const title = '菜单'
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
