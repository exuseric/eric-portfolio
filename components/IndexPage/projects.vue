<template>
  <section class="projects section">
    <div class="container">
      <header class="heading">
        <h2>Feautered</h2>
        <ul class="button-group">
          <li>
            <a
              href="https://www.github.com/exuseric/"
              class="icon-btn"
              title="Github: @exuseric"
              aria-label="github"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.be.net/exuseric/"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-btn"
              title="Behance @exuseric"
              aria-label="behance"
            >
              <Behance />
            </a>
          </li>
        </ul>
      </header>
      <div class="container card-grid">
        <ProjectCard v-for="(i, index) in 3" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import Github from '~/assets/icons/bxl:github.svg?inline'
import Behance from '~/assets/icons/bxl:behance.svg?inline'
export default {
  name: 'IndexPageProjects',
  components: { Github, Behance },
}
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 0;
}
header {
  @include flex-wrap-row;
  justify-content: space-between;
  align-items: center;

  font-family: $heading;

  margin-bottom: $spacer-lg;

  h2 {
    font-size: scale(h3);
    padding: $spacer-sm 0;

    color: $light-gray;

    @include light-theme {
      color: $dark-gray;
    }
  }
}

.button-group {
  @include flex-wrap-row;
  gap: $spacer-xs;

  list-style: none;
  margin: 0;
  padding: 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(rem(350), 1fr));
  gap: $spacer-md;
}
</style>
