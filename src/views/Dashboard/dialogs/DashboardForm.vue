<template>
  <BaseForm
    type="template"
    title="用户新增"
    :visible.sync="form.visible"
    :form="form"
    @submit-form="handleSubmit">

    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
    </ElFormItem>
    <ElFormItem
      label="频道名称1"
      size="small"
      prop="name">
      <ElInput v-model="form.data.name" auto-complete="off" />
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
  methods: {
    async handleSubmit () {
      try {
        const res = await this.$submitForm(() => new Promise((resolve, reject) => setTimeout(() => {
          // reject(new Error('报错啦'))
          resolve('123')
        }, 2000)))
        console.log(res, '!!!')
      } catch (error) {
      }
    }
  }
}
</script>
