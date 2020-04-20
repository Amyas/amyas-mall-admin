<template>
  <BaseForm
    type="store"
    :visible="form.visible"
    :loading="form.loading"
    @close-form="toggleForm('close')">

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
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', ['form'])
  },
  methods: {
    ...mapActions('user', ['toggleForm', 'submit']),
    async handleSubmit () {
      try {
        await this.$submitForm(this.submit)
      } catch (error) {
      }
    }
  }
}
</script>
