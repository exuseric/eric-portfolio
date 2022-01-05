<template>
  <header class="navigation page-navigation main-bg grid-layout">
    <div class="container">
      <LogoLink />

      <nav class="nav">
        <PageMenu />
        <SocialLinks />
      </nav>
    </div>

    <MenuToggleButton />
  </header>
</template>

<style scoped>
.navigation {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: var(--page-navigation-h);
  padding: 0.625rem;

  background-color: var(--primary);
}

.container {
  display: flex;
  flex-flow: row nowrap;
}

.container .logo-link {
  justify-self: flex-start;
}
.container .nav {
  justify-self: flex-end;
}
</style>
