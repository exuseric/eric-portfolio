<template>
  <section class="section section--projects">
    <div class="container">
      <header class="container__heading text-container">
        <h2 class="heading">Feautered Projects</h2>
        <ul class="button-group">
          <li>
            <a
              href="https://www.github.com/exuseric/"
              class="container__heading--link"
              title="Github: @exuseric"
              aria-label="github"
            >
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
              class="container__heading--link"
              title="Behance @exuseric"
              aria-label="behance"
            >
              <span class="icon">
                <Behance />
              </span>
            </a>
          </li>
        </ul>
      </header>
    </div>
    <div class="container container--grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project.attributes"
      />
    </div>
  </section>
</template>

<script>
import Github from '~/assets/icons/bxl:github.svg?inline'
import Behance from '~/assets/icons/bxl:behance.svg?inline'
// import { projectsQuery } from '~/graphql/query'
export default {
  components: { Github, Behance },
  // apollo: {
  //   projects: {
  //     query: projectsQuery,
  //   },
  // },
  data() {
    return {
      projects: [],
    }
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    async getProjects() {
      const { data } = await this.$strapi.$projects.find()
      this.projects = data
    },
  },
}
</script>

<style lang="scss" scoped>
.section--projects {
  min-height: rem(500);
  @include bg-primary;
}
.container {
  &__heading {
    @include flex-wrap-row;
    justify-content: space-between;
    align-items: center;

    font-family: $heading;

    margin-bottom: $spacer-xl;

    .heading {
      @include font(h2);
    }

    &--link {
      @include center;
      @include font(h4);
      color: inherit;

      width: rem(40);
      height: rem(40);

      border-radius: $round-sm;

      &:hover {
        color: $primary-500;
        background-color: $primary-50;
      }
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

.container--grid {
  @include flex-wrap-row;
  gap: $spacer-xl;
}
</style>
