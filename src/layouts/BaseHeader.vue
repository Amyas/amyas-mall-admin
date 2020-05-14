<template>
  <div class="header-container">
    <div class="breadcrumb-container">
      <ElBreadcrumb separator-class="el-icon-arrow-right">
        <template v-for="(item, index) in $route.matched">
          <ElBreadcrumbItem :key="index">
            <RouterLink :to="item.path || '/'">
              {{ item.meta.title }}
            </RouterLink>
          </ElBreadcrumbItem>
        </template>
      </ElBreadcrumb>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.header-container {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

.breadcrumb-container {
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  border-bottom: 1px solid rgba($color: #000, $alpha: 0.08);
}
</style>
