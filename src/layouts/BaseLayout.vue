<template>
  <ElContainer :class="$style.container">
    <ElHeader :class="$style.header">
      <BaseHeader />
    </ElHeader>
    <ElContainer :class="$style.body">
      <ElAside width="200px" :class="$style.navbar">
        <BaseNavbar />
      </ElAside>
      <ElMain :class="$style.main">
        <RouterView></RouterView>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
<script>
import BaseHeader from './BaseHeader'
import BaseNavbar from './BaseNavbar'
export default {
  components: {
    BaseHeader,
    BaseNavbar
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
</style>
