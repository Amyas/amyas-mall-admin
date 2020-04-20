<template>
  <ElContainer :class="$style.container">
    <ElHeader :class="$style.header">
      <BaseHeader />
    </ElHeader>
    <ElContainer :class="$style.body">
      <ElAside width="200px" :class="$style.navbar">
        <BaseNavbar :routes="routes" />
      </ElAside>
      <ElMain :class="$style.main">
        <ElHeader :class="$style.breadcrumb" height="20px">
          <ElBreadcrumb separator-class="el-icon-arrow-right">
            <TransitionGroup name="breadcrumb" mode="in-out">
              <template v-for="(item, index) in $route.matched">
                <ElBreadcrumbItem :key="index">
                  <RouterLink :to="item.path || '/'">
                    {{ item.meta.title }}
                  </RouterLink>
                </ElBreadcrumbItem>
              </template>
            </TransitionGroup>
          </ElBreadcrumb>
        </ElHeader>
        <ElMain :class="$style.content">
          <Transition name="fade-transform" mode="out-in">
            <RouterView></RouterView>
          </Transition>
        </ElMain>
      </ElMain>
    </ElContainer>
  </ElContainer>
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
<style module lang="scss">
.container {
  height: 100vh !important;
  flex-direction: column !important;
}

.header {
  background-color: $--color-default;
}

.navbar {
  background-color: $--color-default;
}

.body {
  overflow: hidden;
}

.main {
  overflow: hidden;
  height: calc(100vh - 60px);
}

.content {
  padding: 0 !important;
  padding-top: 10px !important;
}

.breadcrumb {
  padding-left: 0 !important;
}

</style>
