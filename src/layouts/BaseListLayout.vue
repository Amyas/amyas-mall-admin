<template>
  <ElContainer :class="$style.list">
    <div v-if="$slots.ctrl" :class="$style.ctrl">
      <slot name="ctrl"></slot>
    </div>
    <div v-if="$slots.filter" :class="$style.filter">
      <slot name="filter"></slot>
    </div>
    <div :class="$style.body">
      <slot></slot>
    </div>
    <div v-if="$slots.pagination || listTotal" :class="$style.pagination">
      <slot v-if="$slots.pagination" name="pagination"></slot>
      <ElPagination
        v-else
        :current-page="Number($route.query.pageNumber) || 1"
        :page-sizes="[20, 50, 100, 200]"
        :page-size="Number($route.query.pageSize) || 20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listTotal">
      </ElPagination>
    </div>
    <div v-if="$slots.dialogs" :class="$style.dialogs">
      <slot name="dialogs"></slot>
    </div>
  </ElContainer>
</template>
<script>
export default {
  props: {
    listTotal: {
      type: Number,
      default: null
    }
  }
}
</script>
<style module lang="scss">
.list {
  flex-direction: column !important;
  height: 100%;
}

.loading {
  flex-direction: column !important;
  height: 100%;
}

.ctrl,
.filter {
  margin-bottom: 20px;
}

.body {
  flex-grow: 1;
  overflow: auto;
}

.pagination {
  margin-top: 20px;
}

.dialogs {
  color: #333;
}
</style>
