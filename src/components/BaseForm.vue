<template>
  <ElDrawer
    class="base-form-drawer"
    :direction="direction"
    :size="size"
    :wrapper-closable="wrapperClosable"
    :append-to-body="true"
    :modal-append-to-body="false"
    :destroy-on-close="true"
    :before-close="handleBeforeClose"
    v-bind="$attrs"
    v-on="$listeners">
    <div :class="$style.body">
      <ElForm
        :model="form.data"
        :rules="form.rules"
        label-width="100px"
        ref="form">
        <slot></slot>
      </ElForm>
    </div>
    <div :class="$style.footer">
      <ElButton size="small" @click="handleBeforeClose">取消</ElButton>
      <ElButton
        type="primary"
        size="small"
        :loading="form.loading"
        @click="handleSubmit">{{ submitText }}</ElButton>
      <slot name="footer">
      </slot>
    </div>
  </ElDrawer>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'template',
      validator: function (value) {
        return [
          'template',
          'store'
        ].indexOf(value) !== -1
      }
    },
    direction: {
      type: String,
      default: 'ltr'
    },
    wrapperClosable: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: '600px'
    },
    form: {
      type: Object,
      required: true
    },
    submitText: {
      type: String,
      default: '保存'
    }
  },
  methods: {
    handleBeforeClose () {
      if (this.form.loading) {
        this.$notify({
          title: '提示',
          message: '正在提交表单，请稍等'
        })
        return
      }

      switch (this.type) {
        case 'template':
          this.$emit('update:visible', false)
          break
        case 'store':
          this.$emit('close-form')
      }
    },

    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (!valid) return
        this.$emit('submit-form')
      })
    }
  }
}
</script>
<style module lang="scss">
.body {
  padding: 20px;
  margin-bottom: 60px;
}

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  text-align: right;
  padding: 20px;
  background-color: #fff;
}
</style>
