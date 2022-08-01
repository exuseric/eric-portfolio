<template>
  <section class="blog">
    <header>
      <div class="container">
        <h1>UNDER CONSTRUCTION</h1>
        <nuxt-link to="/" class="primary-btn" role="button">Go Home</nuxt-link>
      </div>
    </header>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  place-content: center;

  margin-top: $navigation-height;
  padding-top: $spacer-lg;
  height: calc(100vh - $navigation-height);

  text-align: center;

  color: $light-gray;

  @include light-theme {
    color: $dark-gray;
  }

  h1 {
    font-size: scale(h1);
  }
}
</style>
