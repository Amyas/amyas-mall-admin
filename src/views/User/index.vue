<template>
  <BaseListLayout :loading="list.loading" :list-total="list.total">

    <template #ctrl>
      <ElButton type="primary" @click="handleShowForm('add')">新建用户</ElButton>
    </template>

    <BaseTable :list="list">
      <ElTableColumn
        prop="name"
        label="姓名"
        width="180">
      </ElTableColumn>
      <ElTableColumn
        label="操作">
        <template slot-scope="scope">
          <ElButton
            size="mini"
            @click="handleShowForm('edit',scope.row)">编辑</ElButton>
          &nbsp;
          <ElPopconfirm
            title="确定删除吗？"
            @onConfirm="handleDelRow(scope.row._id)">
            <ElButton
              size="mini"
              type="danger"
              slot="reference">删除</ElButton>
          </ElPopconfirm>
        </template>
      </ElTableColumn>
    </BaseTable>

    <template #dialogs>
      <UserForm :form="form" @submit="handleSubmit" />
    </template>

  </BaseListLayout>
</template>
<script>
import UserForm from './dialogs/UserForm'

const initForm = () => ({
  username: '',
  password: '',
  name: ''
})

export default {
  components: {
    UserForm
  },
  data () {
    return {
      list: {
        total: 0,
        data: [],
        loading: false
      },
      form: {
        visible: false,
        loading: false,
        type: 'add',
        data: initForm(),
        rules: {
          username: { required: true, message: '请输入账号' },
          password: { required: true, message: '请输入密码' },
          name: { required: true, message: '请输入昵称' }
        }
      }
    }
  },
  created () {
    this.$queryTable(this.$apis.user.list, this.$route.query)
  },
  methods: {
    handleShowForm (type, data) {
      switch (type) {
        case 'add':
          this.form.data = initForm()
          break
        case 'edit':
          this.form.data = data
          break
      }

      this.form.visible = true
      this.form.type = type
    },
    handleSubmit () {
      switch (this.form.type) {
        case 'add':
          this.$submitForm(this.$apis.user.create, this.form.data)

          break
        case 'edit':
          this.$submitForm(this.$apis.user.update, this.form.data)
          break
      }
    },
    handleDelRow (id) {
      this.$delRow(this.$apis.user.delete, id)
    }
  }
}
</script>
