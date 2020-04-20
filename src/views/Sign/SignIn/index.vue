<template>
  <div :class="$style['sign-in']">
    <h3>登陆</h3>
    <ElForm
      ref="form"
      :model="form.data">
      <ElFormItem>
        <ElInput
          v-model="form.username"
          prefix-icon="el-icon-user"
          placeholder="请输入您的账号"></ElInput>
      </ElFormItem>
      <ElFormItem>
        <ElInput
          v-model="form.password"
          prefix-icon="el-icon-lock"
          placeholder="请输入您的密码"></ElInput>
      </ElFormItem>
      <ElFormItem>
        <ElButton
          type="primary"
          style="width: 100%;"
          @click="handleSubmit">登陆</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        loading: false,
        data: {

        },
        rules: {

        }
      }
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.form.data)
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
