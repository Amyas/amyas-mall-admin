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

    <div :class="$style.footer">
      Copyright
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        class=""
        data-icon="copyright"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"></path>
      </svg>
      2020 Amyas Admin</div>
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
  width: 300px;
  text-align: center;
  margin: 100px auto 0;
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

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  margin-bottom: 20px;

  svg {
    padding: 0 6px;
  }
}
</style>
