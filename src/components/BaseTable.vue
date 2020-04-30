<template>
  <ElTable
    ref="table"
    :data="list.data"
    stripe
    border
    height="100%"
    v-loading="list.loading"
    element-loading-text="拼命加载中"
    style="width: 100%;">
    <slot></slot>
  </ElTable>
</template>
<script>

export default {
  props: {
    list: { // 数据
      type: Object,
      required: true
    }
  }
}
</script>
