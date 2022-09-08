<template>
  <article class="card">
    <div class="card__cover">
      <nuxt-img
        fit="cover"
        format="webp"
        :src="`${$data.strapiUrl}${project.Cover.data.attributes.url}`"
        :width="project.Cover.data.attributes.width"
        :height="project.Cover.data.attributes.height"
        :alt="project.Cover.data.attributes.alternativeText" />
    </div>
    <header class="card__header wrapper--copy">
      <h3 class="heading">
        {{ project?.Title }}
      </h3>
      <div class="link-group">
        <a
          class="link link--icon"
          :href="project?.HostedUrl"
          target="_blank"
          rel="noopener noreferrer">
          <span class="icon">
            <ExternalLink />
          </span>
          <span class="txt"> Open </span>
        </a>
        <a
          class="link link--icon"
          :href="project?.RepoUrl"
          target="_blank"
          rel="noopener noreferrer">
          <span class="icon">
            <Github />
          </span>
          <span class="text sr-only">Code</span>
        </a>
      </div>
    </header>
    <div class="card__body wrapper--copy">
      <p>
        {{ project?.Description }}
      </p>
    </div>
  </article>
</template>

<script>
import Github from '~/assets/icons/bxl:github.svg?inline';
import ExternalLink from '~/assets/icons/external-link.svg?inline';
export default {
  name: 'ProjectCard',
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
  data() {
    return {
      strapiUrl: process.env.STRAPI_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
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
  }
}

.heading {
  @include font(h4);
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
