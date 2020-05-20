<template>
  <BaseListLayout :loading="list.loading" :list-total="list.total">

    <template #ctrl>
      <ElButton type="primary" @click="handleShowForm('add')">新建角色</ElButton>
    </template>

    <BaseTable :list="list">
      <ElTableColumn
        prop="role_name"
        label="姓名">
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
      <RoleForm
        :form="form"
        :menu-list="menuList"
        @submit="handleSubmit" />
    </template>

  </BaseListLayout>
</template>
<script>
import RoleForm from './dialogs/RoleForm'

const initForm = () => ({
  role_name: ''
})

export default {
  components: {
    RoleForm
  },
  data () {
    return {
      menuList: [],
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
          role_name: { required: true, message: '请输入角色名称' }
        }
      }
    }
  },
  created () {
    this.$apis.menu.list().then(res => (this.menuList = res.items))
    this.$queryTable(this.$apis.role.list, this.$route.query)
  },
  methods: {
    handleShowForm (type, data) {
      data = _.cloneDeep(data)
      switch (type) {
        case 'add':
          this.form.data = initForm()
          break
        case 'edit':
          data.role_menu = data.role_menu.map(v => v._menu._id)
          this.form.data = data
          break
      }

      this.form.visible = true
      this.form.type = type
    },
    handleSubmit () {
      switch (this.form.type) {
        case 'add':
          break
        case 'edit':
          break
      }
      this.$submitForm({
        type: this.form.type,
        apis: this.$apis.role,
        data: this.form.data
      })
    },
    handleDelRow (id) {
      this.$delRow(id, this.$apis.role)
    }
  }
}
</script>
