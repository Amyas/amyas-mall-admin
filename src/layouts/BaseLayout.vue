<template>
  <div class="app-container">
    <div class="sidebar-container">
      <BaseNavbar :routes="routes" />
    </div>
    <div class="main-container">
      <BaseHeader />
      <div class="route-container">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<script>
import BaseHeader from './BaseHeader'
import BaseNavbar from './BaseNavbar'

import { projectRoutes } from '@/router'

export default {
  components: {
    BaseHeader,
    BaseNavbar
  },
  data () {
    return {
      routes: projectRoutes[0].children
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.sidebar-container {
  width: 210px;
  min-height: 100%;
}

.main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.route-container {
  flex: 1;
  padding: 20px;
}
</style>
