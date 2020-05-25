<template>
  <BaseListLayout :loading="list.loading" :list-total="list.total">

    <template #ctrl>
      <ElButton type="primary" @click="handleShowForm('add')">新建商品</ElButton>
    </template>

    <BaseTable
      :list="list"
      row-key="_id">
      <ElTableColumn prop="goods_name" label="商品名称" />
      <ElTableColumn prop="goods_cate.name" label="商品分类" />
      <ElTableColumn prop="goods_price" label="商品价格" />

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
      <GoodsForm
        :form="form"
        :list="list.data"
        :goods-cate="goodsCate"
        @submit="handleSubmit" />
    </template>

  </BaseListLayout>
</template>
<script>
import GoodsForm from './dialogs/GoodsForm'

const initForm = () => ({
  goods_name: '',
  goods_price: '',
  goods_intro: '',
  goods_detail: '',
  goods_carousel: []
})

export default {
  components: {
    GoodsForm
  },
  data () {
    return {
      goodsCate: [],
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
          goods_name: { required: true, message: '请输入商品名称' },
          goods_price: { required: true, message: '请输入商品价格' },
          goods_intro: { required: true, message: '请输入商品简介' },
          goods_detail: { required: true, message: '请输入商品详情' },
          goods_carousel: { required: true, message: '请上传商品轮播图' }
        }
      }
    }
  },
  created () {
    this.$apis.goodsCate.list().then(res => (this.goodsCate = res.items))
    this.$queryTable(this.$apis.goods.list, this.$route.query)
  },
  methods: {
    handleShowForm (type, data) {
      switch (type) {
        case 'add':
          this.form.data = initForm()
          break
        case 'edit':
          data = _.cloneDeep(data)
          data.goods_cate = data.goods_cate._id
          data.goods_carousel = data.goods_carousel.map(v => ({ url: v }))
          this.form.data = data
          break
      }

      this.form.visible = true
      this.form.type = type
    },
    handleSubmit () {
      const data = _.cloneDeep(this.form.data)
      data.goods_carousel = data.goods_carousel.map(v => v.url)
      switch (this.form.type) {
        case 'add':
          break
        case 'edit':
          break
      }

      this.$submitForm({
        type: this.form.type,
        apis: this.$apis.goods,
        data
      })
    },
    handleDelRow (id) {
      this.$delRow(id, this.$apis.goods)
    }
  }
}
</script>
