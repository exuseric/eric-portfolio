<template>
  <main class="section blog">
    <header class="container container--header">
      <div class="wrapper--copy">
        <h1 class="heading">UNDER CONSTRUCTION</h1>
      </div>
    </header>
  </main>
</template>

<script>
import { getPage } from '~/graphql/queries';
export default {
  name: 'BlogHomepage',
  layout: 'blogLayout',

  async asynData({ $hygraph }) {
    const { page } = await $hygraph.request(getPage('blog-homepage'));

    return { page };
  },
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
