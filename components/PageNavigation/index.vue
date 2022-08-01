<template>
  <header class="nav-bar">
    <div class="nav container">
      <LogoLink />
      <PageNavigationMenu />
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNavigation',
}
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;

  width: 100%;
  height: $navigation-height;
  padding: 0 $spacer-sm;

  @include screen(small) {
    padding: 0 $spacer-md;
  }
}

.nav {
  // @include flex-wrap-row;
  @include grid-flow-col;
  align-items: center;
  gap: $spacer-xs;
  height: 100%;

  .logo-link {
    justify-self: start;
  }
  .menu {
    justify-self: end;
  }
}

// THEMING
.nav-bar {
  background-color: $black;

  @include light-theme {
    background-color: $white;
  }
}
</style>
