<template>
  <main class="error section">
    <section class="container">
      <header class="container__header wrapper--copy">
        <div class="text-group">
          <h1 class="heading">{{ error.statusCode }}</h1>
          <p class="message">{{ error.message }}</p>
        </div>
        <nuxt-link to="/" class="button button--main" role="button">
          Go back home
        </nuxt-link>
      </header>
      <div class="container__image">
        <img
          src="~/assets/illustration/error.webp"
          alt="error illustration"
          aria-hidden="true"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    error: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  @include flex-wrap-row;
  justify-content: space-between;
  align-items: center;
  gap: $spacer-lg;

  &__image {
    width: rem(300);
    height: rem(300);
  }

  &__header {
    @include grid-flow-row;
    gap: $spacer-lg;

    .heading {
      @include font(h1);
      @include text-color('primary', '500');
    }
    .message {
      @include font(h5);
    }
  }
}
</style>
