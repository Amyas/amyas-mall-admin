<template>
  <BaseListLayout :loading="list.loading">

    <template #ctrl>
      <ElButton type="primary" @click="formAdd(initForm())">新建菜单</ElButton>
    </template>

    <BaseTable
      :list="list"
      row-key="_id">
      <ElTableColumn
        prop="menu_name"
        label="菜单名称">
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
            @onConfirm="$delRow('menu', scope.row._id)">
            <ElButton
              size="mini"
              type="danger"
              slot="reference">删除</ElButton>
          </ElPopconfirm>
        </template>
      </ElTableColumn>
    </BaseTable>

    <template #dialogs>
      <MenuForm
        :form="form"
        :list="list.data"
        @submit="formSubmit('menu', form.data)" />
    </template>

  </BaseListLayout>
</template>
<script>
import MenuForm from './dialogs/MenuForm'

const initForm = () => ({
  menu_name: '',
  menu_type: 1,
  _parent: null
})

export default {
  components: {
    MenuForm
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
          menu_name: { required: true, message: '请输入菜单名称' },
          menu_type: { required: true, message: '请选择菜单类型' }
        }
      }
    }
  },
  created () {
    this.$queryTable('menu')
  },
  methods: {
    initForm
  }
}
</script>
