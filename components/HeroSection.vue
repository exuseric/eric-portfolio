<template>
  <header class="section hero">
    <div class="container">
      <article class="hero__heading wrapper--copy">
        <h1 class="hero__heading__title">{{ hero?.title }}</h1>
        <p class="hero__heading__description">
          {{ hero?.desc }}
        </p>
        <div
          v-if="hero?.cta"
          class="hero__heading__cta">
          <nuxt-link
            to="/contact"
            class="button button--main"
            role="button">
            {{ hero?.cta }}
          </nuxt-link>
        </div>
      </article>

      <div class="hero__cover">
        <nuxt-img
          v-if="hero?.cover"
          format="webp"
          class="hero__cover__image"
          fit="contain"
          :src="`${$data.strapiUrl}${hero?.cover?.url}`"
          :width="hero?.cover?.width"
          :height="hero?.cover?.height"
          :alt="hero?.cover?.alternativeText" />
      </div>
    </div>
  </header>
</template>

<script>
import { getHero } from '~/lib/strapiData';

export default {
  props: {
    page: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hero: {},
      strapiUrl: process.env.STRAPI_URL,
    };
  },
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await this.$strapi.graphql({
        query: this.query,
      });
      this.hero = getHero({ page: this.page, data });
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
