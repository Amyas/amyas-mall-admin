<template>
  <div :class="$style['sign-in']">
    <h3>登陆</h3>
    <ElForm
      ref="form"
      :model="form.data"
      :rules="form.rules">

      <ElFormItem prop="username">
        <ElInput
          v-model="form.data.username"
          prefix-icon="el-icon-user"
          placeholder="请输入您的账号"></ElInput>
      </ElFormItem>

      <ElFormItem prop="password">
        <ElInput
          v-model="form.data.password"
          prefix-icon="el-icon-lock"
          placeholder="请输入您的密码"></ElInput>
      </ElFormItem>

      <ElFormItem>
        <ElButton
          type="primary"
          style="width: 100%;"
          @click="handleSubmit"
          :loading="form.loading">登陆</ElButton>
      </ElFormItem>

    </ElForm>
  </div>
</template>
<script>

const initForm = () => ({
  username: '',
  password: ''
})

export default {
  data () {
    return {
      form: {
        loading: false,
        data: initForm(),
        rules: {
          username: { required: true, message: '请输入账号' },
          password: { required: true, message: '请输入密码' }
        }
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(async valid => {
        if (!valid) return
        this.form.loading = true
        try {
          await this.$apis.auth.signIn(this.form.data)
          this.$router.replace('/')
        } catch (error) {
          this.$notify({
            title: '失败',
            message: error.status.message,
            type: 'error'
          })
        } finally {
          this.form.loading = false
        }
      })
    }
  }
}
</script>
<style module lang="scss">
.sign-in {
  width: 300px;
  margin: 60px auto 0;

  h3 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
}
</style>
