<template>
  <BaseForm
    type="template"
    :title="formatTitle"
    :visible.sync="form.visible"
    :form="form"
    @submit-form="$emit('submit')">

    <ElFormItem
      label="商品名称:"
      size="small"
      prop="goods_name">
      <ElInput v-model="form.data.goods_name" placeholder="请输入商品名称" />
    </ElFormItem>

    <ElFormItem
      label="商品分类:"
      size="small"
      prop="goods_cate">
      <TreeSelect
        :options="goodsCate"
        :normalizer="normalizer"
        :default-expand-level="Infinity"
        placeholder="请选择商品分类"
        v-model="form.data.goods_cate" />
    </ElFormItem>

    <ElFormItem
      label="商品价格:"
      size="small"
      prop="goods_price">
      <ElInput v-model.number="form.data.goods_price" placeholder="请输入商品价格" />
    </ElFormItem>

    <ElFormItem
      label="商品简介:"
      size="small"
      prop="goods_intro">
      <ElInput v-model="form.data.goods_intro" placeholder="请输入商品简介" />
    </ElFormItem>

    <ElFormItem
      label="商品详情:"
      size="small"
      prop="goods_detail">
      <ElInput
        type="textarea"
        :rows="20"
        placeholder="请输入商品详情"
        v-model="form.data.goods_detail">
      </ElInput>
    </ElFormItem>

    <ElFormItem
      label="商品轮播图:"
      size="small"
      prop="goods_carousel">
      <UploadImg
        :file-list="form.data.goods_carousel"
        :on-success="handleCarouselUploadSuccess"
        :on-remove="handleCarouselUploadRemove" />
    </ElFormItem>

  </BaseForm>
</template>
<script>
import UploadImg from '@/components/UploadImg'
export default {
  components: {
    UploadImg
  },
  props: {
    form: {
      type: Object,
      required: true
    },
    goodsCate: {
      type: Array,
      required: true
    }
  },
  computed: {
    formatTitle () {
      const title = '商品'
      const prefix = this.form.type === 'add' ? '新增' : '编辑'
      return prefix + title
    }
  },
  methods: {
    /**
     * @description 商品轮播图上传成功
     */
    handleCarouselUploadSuccess (res, file, fileList) {
      this.form.data.goods_carousel.push(res)
    },
    /**
     * @description 商品轮播图删除
     */
    handleCarouselUploadRemove (file, fileList) {
      const imgIndex = this.form.data.goods_carousel.findIndex(v => v.url === file.url)
      this.form.data.goods_carousel.splice(imgIndex, 1)
    },
    /**
     * @description 商品分类转译格式化
     */
    normalizer (node) {
      return {
        id: node._id,
        label: node.name,
        children: node.children
      }
    }
  }
}
</script>
