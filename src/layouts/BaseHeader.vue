<template>
  <div :class="$style.header">
    <div :class="$style.title">
      Amyas Admin
    </div>
    <ElDropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <ElAvatar style="background-color: #409eff;" icon="el-icon-user-solid"></ElAvatar>
      </span>
      <ElDropdownMenu slot="dropdown">
        <ElDropdownItem command="logout">退出登陆</ElDropdownItem>
      </ElDropdownMenu>
    </ElDropdown>
  </div>
</template>
<style module lang="scss">
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
</style>
