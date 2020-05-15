<template>
  <BaseForm
    type="template"
    :title="formatTitle"
    :visible.sync="form.visible"
    :form="form"
    @submit-form="$emit('submit')">

    <ElFormItem
      label="分类名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" placeholder="请填写分类名称" />
    </ElFormItem>

    <ElFormItem
      label="分类名称"
      size="small"
      prop="_parent">
      <TreeSelect
        :options="list"
        :normalizer="normalizer"
        :default-expand-level="Infinity"
        placeholder="请选择父级分类"
        v-model="form.data._parent" />
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
      const title = '商品分类'
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
        label: node.name,
        children: node.children
      }
    }
  }
}
</script>
