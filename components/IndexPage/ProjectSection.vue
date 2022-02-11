<template>
  <section class="projects">
    <div class="heading">
      <h2>Project Showcase</h2>

      <div class="links">
        <a
          href="https://github.com/exuseric"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          >on github</a
        >
        <a
          href="https://github.com/exuseric"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          >on behance</a
        >
      </div>
    </div>

    <div class="project-grid">
      <ProjectCard />
    </div>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
  components: { ProjectCard },
}
</script>

<style lang="scss" scoped>
.projects {
  content-visibilty: auto;
  contain-intrinsic-size: 700px;

  .heading {
    @include center;
    padding: $pd-l;
  }

  h2 {
    font-size: scale('h2');
    font-family: family('heading');
    font-weight: 700;
    color: color('dark');
    line-height: 1.25;

    text-align: center;
    padding: $pd-m;
  }

  .link {
    @include center;
    width: calc($box-btn-w / 2);
    height: $box-btn-h;

    text-decoration: none;
    text-transform: capitalize;
    color: color('accent');

    &:hover,
    &:focus-visible {
      color: color('accent-d');
      background-color: color('accent-l');
      outline-color: color('accent-d');
    }

    @include mid-screen {
      width: $box-btn-w;
      height: $box-btn-h;
    }
  }
}

.links {
  @include grid-flow($flow: column, $gap: 0.625rem);
  justify-content: space-between;
}

.project-grid {
  @include grid-row($row-count: auto, $row-height: 1fr, $gap: 5rem);
  padding: 5rem 0;
}
</style>
