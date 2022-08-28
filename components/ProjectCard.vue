<template>
  <article class="card">
    <div class="card__container">
      <header class="card__header text-container">
        <h3 class="heading">
          {{ project.name }}
        </h3>
        <div class="link-group">
          <a
            class="link link--icon"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="icon">
              <ExternalLink />
            </span>
            <span class="txt"> Open </span>
          </a>
          <a
            class="link link--icon"
            :href="project.repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="text">Code</span>
            <span class="icon">
              <Github />
            </span>
          </a>
        </div>
      </header>
      <div class="card__cover">
        <nuxt-img
          src="/img/projects/pexels-media-4497731-1651340345560.jpeg"
          alt="cuppa"
          width="100%"
          height="100%"
          fit="cover"
        />
      </div>
      <div class="card__body text-container">
        <p>
          {{ project.description }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import Github from '~/assets/icons/bxl:github.svg?inline'
import ExternalLink from '~/assets/icons/external-link.svg?inline'
export default {
  name: 'ProjectCard',
  components: {
    Github,
    ExternalLink,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    project: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  @include center;
  isolation: isolate;
  width: 100%;
  max-width: rem(500);
  min-height: rem(600);

  // @include bg-dark;

  &__container {
    grid-column: 3 / -3;
    grid-row: 2 / -2;
    max-width: rem(350);
  }
}

.card {
  padding: $spacer-xl $spacer-lg;
  // background-color: $dark-gray;
  @include bg-dark;

  &__cover {
    width: 100%;
    max-width: rem(350);
    height: rem(350);
    margin-block: $spacer-xl;
  }
}

.heading {
  @include font(h2);
  // font-weight: 100;
  text-align: center;
}

.link-group {
  @include grid-flow-col;
  gap: $spacer-xl;
  margin-block: $spacer-md;
  .link {
    // color: red;
  }
}
</style>
