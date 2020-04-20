<template>
  <div :class="$style.sign">
    <RouterLink to="/" :class="$style.header">
      <img
        :class="$style.logo"
        src="@/assets/logo.svg"
        alt="">
      <span :class="$style.title">Amyas Admin</span>
    </RouterLink>

    <RouterView></RouterView>
  </div>
</template>
<style module lang="scss">
.sign {
  width: 100vw;
  height: 100vh;
  background-image: url('~@/assets/login-bg.svg');
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-top: 100px;
  text-decoration: none;
}

.logo {
  height: 80px;
  margin-right: 16px;
}

.title {
  position: relative;
  top: -4px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 33px;
  font-family: Avenir, helvetica neue, Arial, Helvetica, sans-serif;
}
</style>
