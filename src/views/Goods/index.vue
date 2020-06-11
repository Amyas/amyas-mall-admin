<template>
  <BaseListLayout :loading="list.loading" :list-total="list.total">

    <template #ctrl>
      <ElButton
        v-permission.all="['goods.create','goods.test']"
        type="primary"
        @click="formAdd(initForm())">新建商品</ElButton>
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
            @click="formEdit(scope.row)">编辑</ElButton>
          &nbsp;
          <ElPopconfirm
            title="确定删除吗？"
            @onConfirm="$delRow('goods',scope.row._id)">
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
        :goods-cate="goodsCate"
        @submit="formSubmit('goods',form.data)" />
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
    this.$queryTable('goods')
  },
  methods: {
    initForm,
    /**
     * 表单编辑前
     * @param {Object} data 表单数据
     */
    async editBefore (data) {
      data.goods_cate = data.goods_cate._id
      data.goods_carousel = data.goods_carousel.map(v => ({ url: v }))
    },
    /**
     * 表单提交前
     * @param {String} type 表单类型 add->新增 edit->编辑
     * @param {Object} data 表单数据
     */
    async submitBefore (type, data) {
      data.goods_carousel = data.goods_carousel.map(v => v.url)
    }
  }
}
</script>
