<template>
  <button class="toggle-menu center">
    <MenuIcon :is-menu-open="isMenuOpen" />
    <span class="sr-only">Menu</span>
  </button>
</template>

<script>
import MenuIcon from '~/components/Icons/MenuIcon.vue'
export default {
  name: 'MenuToggleButton',
  components: {
    MenuIcon,
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle-menu {
  width: $icon-wh;
  height: $icon-wh;

  color: color('light');
  background-color: color('dark');

  border: 2px solid transparent;
}
</style>
