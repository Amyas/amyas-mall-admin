<template>
  <ElDrawer
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
      <slot></slot>
    </div>
    <div :class="$style.footer">
      <ElButton size="small" @click="handleBeforeClose">取消</ElButton>
      <slot name="footer">
      </slot>
    </div>
  </ElDrawer>
</template>
<script>
export default {
  props: {
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
    loading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleBeforeClose () {
      if (this.loading) {
        this.$notify({
          title: '提示',
          message: '正在提交表单，请稍等'
        })
        return
      }
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style module lang="scss">
.body {

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
