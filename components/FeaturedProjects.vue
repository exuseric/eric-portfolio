<template>
  <section class="section section--projects">
    <div class="container container--title">
      <header class="container__header wrapper--copy">
        <h2 class="heading">
          {{ $data.projects.title }}
        </h2>
        <ul class="button-group">
          <li>
            <a
              href="https://www.github.com/exuseric/"
              class="link container__header--link"
              title="Github: @exuseric"
              aria-label="github">
              <span class="icon">
                <Github />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.be.net/exuseric/"
              target="_blank"
              rel="noopener noreferrer"
              class="link container__header--link"
              title="Behance @exuseric"
              aria-label="behance"
              disabled="true">
              <span class="icon">
                <Behance />
              </span>
            </a>
          </li>
        </ul>
      </header>
    </div>
    <div
      id="projects"
      class="container container--grid">
      <ProjectCard
        v-for="project in $data.projects.projects"
        :key="project.id"
        :project="project.attributes" />
    </div>
  </section>
</template>

<script>
import Github from '~/assets/icons/bxl:github.svg?inline';
import Behance from '~/assets/icons/bxl:behance.svg?inline';
import { featuredProjects } from '~/graphql/queries';
export default {
  components: { Github, Behance },
  data() {
    return {
      projects: {},
    };
  },
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { homePage } = await this.$strapi.graphql({
        query: featuredProjects(),
      });

      this.projects = Array(homePage).map((itm) => ({
        projects: itm.data.attributes.Featured.Projects.data,
        title: itm.data.attributes.Featured.Title,
      }))[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.section--projects {
  position: relative;
  isolation: isolate;

  min-height: rem(500);
  @include text-color('primary', '900');
  @include bg-color('primary', '500');
  overflow: hidden;
}

.container {
  &--title {
    padding: $spacer-md;
    @include screen(tablet) {
      padding: 0;
    }
  }

  &--grid {
    @include flex;
    gap: $spacer-md;
  }

  &__header {
    @include grid-flow-row;
    align-items: center;
    margin-bottom: $spacer-2xl;

    font-family: $heading;

    .heading {
      @include font(h3);
    }

    &--link {
      @include center;
      @include font(h4);

      width: rem(40);
      height: rem(40);

      border-radius: $round-sm;
    }
  }
}

.button-group {
  @include flex-wrap-row;
  gap: $spacer-sm;

  list-style: none;
  margin: 0;
  padding: 0;

  color: inherit;
}
</style>
