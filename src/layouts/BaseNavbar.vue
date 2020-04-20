<template>
  <ElMenu
    :default-active="$route.name"
    class="base-nav-bar"
    router>
    <BaseNavbarItem
      v-for="item in routes"
      :key="item.name"
      :menu="item" />
  </ElMenu>
</template>
<script>
import { projectRoutes } from '@/router'
import BaseNavbarItem from './BaseNavbarItem'
export default {
  components: {
    BaseNavbarItem
  },
  data () {
    return {
      routes: projectRoutes[0].children
    }
  }
}
</script>
<style lang="scss">
.base-nav-bar {
  border-right: none !important;
  color: #fff !important;
  background-color: $--color-default !important;

  .el-menu-item,
  .el-menu-item i,
  .el-submenu__title,
  .el-submenu__title i {
    color: #fff !important;
  }

  .el-menu-item,
  .el-submenu__title {
    &:hover {
      background-color: rgba($color: #337ecc, $alpha: 0.6) !important;
    }

    &.is-active {
      background-color: rgba(255, 255, 255, 0.2) !important;
    }
  }

  .el-menu {
    background-color: $--color-default !important;
  }
}

</style>
