<template>
  <ElSubmenu
    v-if="menu.children && menu.children.length > 0"
    :index="menu.name">
    <template #title>
      <i :class="menu.meta.icon"></i>
      <span>{{ menu.meta.title }}</span>
    </template>
    <BaseNavbarItem
      v-for="item in menu.children"
      :key="item.name"
      :menu="item" />
  </ElSubmenu>
  <ElMenuItem
    v-else-if="!menu.meta.hidden"
    :index="menu.name"
    :route="menu">
    <i :class="menu.meta.icon"></i>
    <template #title>{{ menu.meta.title }}</template>
  </ElMenuItem>
</template>
<script>
export default {
  name: 'BaseNavbarItem',
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
