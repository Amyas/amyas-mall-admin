<template>
  <BaseForm :visible.sync="form.visible" :loading="form.loading">

    <template #footer>
      <ElButton
        type="primary"
        size="small"
        :loading="form.loading"
        @click="handleSubmit">保存</ElButton>
    </template>

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
