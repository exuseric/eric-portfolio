<template>
  <header class="section hero">
    <div class="container">
      <article class="hero__heading wrapper--copy">
        <h1 class="hero__heading__title">{{ hero?.title }}</h1>
        <p class="hero__heading__description">
          {{ hero?.description }}
        </p>
        <div
          v-if="hero?.callToAction"
          class="hero__heading__cta">
          <nuxt-link
            v-for="cta in hero?.callToAction"
            :key="cta.link"
            :to="cta.link"
            class="button button--main"
            role="button">
            {{ cta.title }}
          </nuxt-link>
        </div>
      </article>

      <div class="hero__cover">
        <nuxt-img
          v-if="hero?.cover"
          format="webp"
          class="hero__cover__image"
          fit="contain"
          :src="hero?.cover?.url"
          :width="hero?.cover?.width"
          :height="hero?.cover?.height"
          :alt="hero?.cover?.alternativeText" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  // width: 100%;

  @include screen(tablet) {
    @include grid-flow-col;
    justify-content: space-between;
  }
}

.hero {
  &__heading {
    margin-block: $spacer-lg;

    &__title {
      font-family: $heading;
      @include font(h1);
      @include text-color('primary', '500');
      margin-bottom: $spacer-lg;

      @include screen(large) {
      }
    }

    &__description {
      @include font(h6);
    }

    &__cta {
      @include flex-wrap-row;
      gap: $spacer-sm;
      margin-top: $spacer-md;
    }
  }

  &__cover {
    @include center;
    max-width: rem(500);
    max-height: rem(500);
    margin: $spacer-lg;

    &__image {
      aspect-ratio: 1 / 1;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
