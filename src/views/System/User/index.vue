<template>
  <BaseListLayout :loading="list.loading" :list-total="list.total">

    <template #ctrl>
      <ElButton type="primary" @click="formAdd(initForm())">新建用户</ElButton>
    </template>

    <BaseTable :list="list">
      <ElTableColumn
        prop="name"
        label="姓名">
      </ElTableColumn>
      <ElTableColumn
        prop="username"
        label="账号">
      </ElTableColumn>
      <ElTableColumn
        prop="password"
        label="密码">
      </ElTableColumn>
      <ElTableColumn
        prop="_role.role_name"
        label="角色">
      </ElTableColumn>
      <ElTableColumn
        label="操作">
        <template slot-scope="scope">
          <ElButton
            size="mini"
            @click="formEdit(scope.row)">编辑</ElButton>
          &nbsp;
          <ElPopconfirm
            title="确定删除吗？"
            @onConfirm="$delRow('user',scope.row._id)">
            <ElButton
              size="mini"
              type="danger"
              slot="reference">删除</ElButton>
          </ElPopconfirm>
        </template>
      </ElTableColumn>
    </BaseTable>

    <template #dialogs>
      <UserForm
        :form="form"
        :role-list="roleList"
        @submit="formSubmit('user', form.data)" />
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
      roleList: [],
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
          name: { required: true, message: '请输入昵称' },
          _role: { required: true, message: '请选择角色' }
        }
      }
    }
  },
  created () {
    this.$apis.role.list({
      pageSize: 9999
    }).then(res => (this.roleList = res.items))
    this.$queryTable('user')
  },
  methods: {
    initForm,
    /**
     * @description 表单编辑前
     */
    formEditBefore (data) {
      data._role = data._role._id
    }
  }
}
</script>
