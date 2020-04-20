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
    <div v-if="$slots.pagination" :class="$style.pagination">
      <slot name="pagination"></slot>
    </div>
    <div v-if="$slots.dialogs" :class="$style.dialogs">
      <slot name="dialogs"></slot>
    </div>
  </ElContainer>
</template>
<style module lang="scss">
.list {
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
</style>
