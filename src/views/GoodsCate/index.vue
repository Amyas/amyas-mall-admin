<template>
  <BaseListLayout :loading="list.loading">

    <template #ctrl>
      <ElButton type="primary" @click="formAdd(initForm())">新建商品分类</ElButton>
    </template>

    <BaseTable
      :list="list"
      row-key="_id">
      <ElTableColumn
        prop="name"
        label="分类名称">
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
            @onConfirm="$delRow('goodsCate', scope.row._id)">
            <ElButton
              size="mini"
              type="danger"
              slot="reference">删除</ElButton>
          </ElPopconfirm>
        </template>
      </ElTableColumn>
    </BaseTable>

    <template #dialogs>
      <GoodsCateForm
        :form="form"
        :list="list.data"
        @submit="formSubmit('goodsCate', form.data)" />
    </template>

  </BaseListLayout>
</template>
<script>
import GoodsCateForm from './dialogs/GoodsCateForm'

const initForm = () => ({
  name: '',
  _parent: null
})

export default {
  components: {
    GoodsCateForm
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
          name: { required: true, message: '请输入商品分类名称' }
        }
      }
    }
  },
  created () {
    this.$queryTable('goodsCate')
  },
  methods: {
    initForm
  }
}
</script>
