
<template>
  <BaseForm
    type="store"
    title="用户编辑"
    :visible="form.visible"
    :form="form"
    @close-form="toggleForm('close')"
    @submit-form="handleSubmit">

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
