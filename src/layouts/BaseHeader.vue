<template>
  <div class="header-container">
    <div class="breadcrumb-container">
      <ElBreadcrumb separator-class="el-icon-arrow-right">
        <template v-for="(item, index) in $route.matched">
          <ElBreadcrumbItem :key="index">
            <RouterLink :to="item.path || '/'">
              {{ item.path ? item.meta.title : '首页' }}
            </RouterLink>
          </ElBreadcrumbItem>
        </template>
      </ElBreadcrumb>

      <ElDropdown
        class="dropdown"
        @command="handleClickDropdown"
        :hide-on-click="false">
        <span class="el-dropdown-link">
          <!-- <ElAvatar style="background-color: #409eff;" icon="el-icon-user-solid"></ElAvatar> -->
          <span class="title">Amyas</span>
        </span>
        <ElDropdownMenu slot="dropdown">
          <ElDropdownItem command="signOut">退出登陆</ElDropdownItem>
        </ElDropdownMenu>
      </ElDropdown>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async handleClickDropdown (command) {
      switch (command) {
        case 'signOut':
          await this.$apis.auth.signOut()
          this.$notify({
            title: '成功',
            message: '退出成功，请重新登陆',
            type: 'success'
          })
          window.location.href = '/sign/in'
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.header-container {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

.breadcrumb-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding-left: 20px;
  border-bottom: 1px solid rgba($color: #000, $alpha: 0.08);
}

.dropdown {
  color: #000;
}

.el-dropdown-link {
  display: flex;
  flex-direction: row;
  align-items: center;

  .title {
    padding: 0 20px;
  }
}
</style>
