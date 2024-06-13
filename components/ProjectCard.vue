<template>
  <article class="project-card">
    <div class="project-card__cover">
      <nuxt-img
        preset="projectCover"
        :src="project.cover.url"
        :alt="project.cover.alternativeText" />
    </div>
    <header class="project-card__header wrapper--copy">
      <h3 class="project-card__header__heading">
        {{ project?.title }}
      </h3>
      <div class="link-group">
        <a
          class="link link--icon"
          :href="project?.hostedUrl"
          target="_blank"
          rel="noopener noreferrer">
          <span class="icon">
            <ExternalLink />
          </span>
          <span class="txt"> Open </span>
        </a>
        <a
          class="link link--icon"
          :href="project?.repoUrl"
          target="_blank"
          rel="noopener noreferrer">
          <span class="icon">
            <Github />
          </span>
          <span class="text sr-only">Code</span>
        </a>
      </div>
    </header>
    <div class="project-card__body wrapper--copy">
      <p>
        {{ project?.description }}
      </p>
    </div>
  </article>
</template>

<script>
import Github from '~/assets/icons/bxl_github.svg?inline';
import ExternalLink from '~/assets/icons/external-link.svg?inline';
export default {
  components: {
    Github,
    ExternalLink,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  width: 100%;
  max-width: rem(350);
  @include text-dark;
  @include bg-color('primary', '50');

  border-radius: $round-sm;
  overflow: hidden;

  @include screen('large') {
    max-width: rem(450);
  }

  &__cover {
    width: 100%;
    height: rem(250);
  }

  &__body,
  &__header {
    padding-inline: $spacer-lg;
    margin-block: $spacer-lg;
  }

  &__header {
    @include grid-flow-col;
    justify-content: space-between;

    &__heading {
      @include font(h3);
    }
  }
}

.link-group {
  @include grid-flow-col;
  justify-content: start;
  gap: $spacer-md;
  // margin-top: $spacer-sm;
  .link {
    @include grid-flow-col;
    justify-content: start;
    width: fit-content;
    text-decoration: none;
  }
}
</style>
