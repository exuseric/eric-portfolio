<template>
  <main class="section blog">
    <header class="container container--header">
      <div class="wrapper--copy">
        <h1 class="heading">UNDER CONSTRUCTION</h1>
        <nuxt-link
          to="/"
          class="button button--main"
          role="button"
          >Go Home</nuxt-link
        >
      </div>
    </header>
  </main>
</template>

<script>
export default {
  name: 'BlogHomepage',
};
</script>

<style lang="scss" scoped>
.container--header {
  display: grid;
  align-items: center;
  min-height: 60vh;

  @include screen(tablet) {
    @include grid-flow-col;
    align-items: center;
    justify-content: space-between;
  }
}

.illustration {
  max-width: rem(400);
  height: rem(700);
}
.heading {
  @include font('h1');
  font-family: $heading;
  margin-block: $spacer-xl;
}
</style>
