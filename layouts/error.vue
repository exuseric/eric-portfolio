<template>
  <main class="error section">
    <section class="container">
      <div class="image">
        <img
          src="~/assets/illustration/error.webp"
          alt="error illustration"
          aria-hidden="true"
        />
      </div>
      <header class="heading text-container">
        <div class="text-group">
          <h1>{{ error.statusCode }}</h1>
          <p>{{ error.message }}</p>
        </div>
        <nuxt-link to="/" class="primary-btn" role="button">
          Go back home
        </nuxt-link>
      </header>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  place-content: center;

  position: relative;
  isolation: isolate;

  margin-top: $navigation-height;
  padding: $spacer-lg 0;

  height: calc(100vh - $navigation-height);

  background-color: $black;

  @include light-theme {
    background-color: $white;
  }
}

.illustration {
  width: 100%;
  max-width: rem(350);

  // display: none;

  @include screen(small) {
    display: block;
  }
}
.container {
  width: 100%;
  max-width: rem(750);

  @include screen(small) {
    @include grid-flow-col;
    align-items: center;
  }
}

.heading {
  @include grid-flow-row;
  gap: $spacer-xs;
  padding: $spacer-md;

  height: fit-content;
  color: $light-gray;

  @include light-theme {
    color: $dark-gray;
  }

  h1 {
    font-size: scale(h1);
    font-family: $heading;
    line-height: rem(56);
  }
  p {
    font-size: scale(h6);
    font-family: $body;
  }

  a {
    width: fit-content;
  }
}

.text-group {
  margin-bottom: $spacer-sm;
}
</style>
