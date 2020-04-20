<template>
  <ElTable
    ref="table"
    :data="prop"
    stripe
    border
    height="100%"
    style="width: 100%;">
    <slot></slot>
    <ElTableColumn
      v-if="$slots.ctrl"
      label="操作">
      <slot name="ctrl"></slot>
    </ElTableColumn>
  </ElTable>
</template>
<script>
export default {
  props: {
    prop: { // 数据
      type: Array,
      required: true
    }
  },
  async mounted () {
    const tableDom = this.$refs.table.$el

    const ctrlWidth = await this.queryCtrlWidth(tableDom)

    await this.setCtrlWidth(tableDom, ctrlWidth)
  },
  methods: {
    async queryCtrlWidth (tableDom) {
      await this.$nextTick()

      const tableBodyDom = tableDom.querySelector('.el-table__body')
      const tableBodyTrs = tableBodyDom.querySelector('tbody').children
      const tableBodyTds = Array.from(tableBodyTrs)[0].children
      const ctrlDom = tableBodyTds[tableBodyTds.length - 1].querySelector('.cell').children
      const BASE_BUTTON_WIDTH = 66 // 默认一个元素的宽度
      const width = Array.from(ctrlDom).length * BASE_BUTTON_WIDTH
      const maxWidth = BASE_BUTTON_WIDTH * 3
      return width > maxWidth ? maxWidth : width
    },

    async setCtrlWidth (tableDom, ctrlWidth) {
      await this.$nextTick()

      const colgroups = tableDom.querySelectorAll('colgroup')
      Array.from(colgroups).forEach(colgroup => {
        const colDom = colgroup.children
        const ctrlDom = colDom[colDom.length - 1]
        ctrlDom.style.width = ctrlWidth + 'px'
      })
    }
  }
}
</script>
