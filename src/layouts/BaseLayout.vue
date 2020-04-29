<template>
  <ElContainer :class="$style.container">
    <ElHeader :class="$style.header">
      <BaseHeader
        :collapse-navbar="collapseNavbar"
        @toggle-navbar="toggleNavbar" />
    </ElHeader>
    <ElContainer :class="$style.body">
      <ElAside
        v-if="isShowNavbar"
        width="200px"
        :class="$style.navbar">
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
      routes: projectRoutes[0].children,
      isShowNavbar: true,
      collapseNavbar: false
    }
  },
  mounted () {
    this.updateNavbarCollapse()
    window.addEventListener('resize', () => {
      this.updateNavbarCollapse()
    })
  },
  methods: {
    updateNavbarCollapse () {
      if (document.documentElement.clientWidth < 900) {
        this.collapseNavbar = true
        this.isShowNavbar = false
      } else {
        this.collapseNavbar = false
        this.isShowNavbar = true
      }
    },

    toggleNavbar () {
      console.log(1)
      this.isShowNavbar = !this.isShowNavbar
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
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

.navbar {
  background-color: $--color-default;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

.body {
  overflow: hidden;
}

.main {
  overflow: hidden !important;
  height: calc(100vh - 70px);
  background-color: rgba($color: #000, $alpha: 0.02);
}

.content {
  height: 100%;
  padding: 0 !important;
  padding-top: 10px !important;
}

.breadcrumb {
  padding-left: 0 !important;
}

</style>
