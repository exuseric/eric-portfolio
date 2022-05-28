<template>
  <section class="projects">
    <header class="projects__heading wrapper">
      <h2>Projects</h2>
    </header>

    <div class="projects__cards content wrapper">
      <article class="card">
        <div class="cover">
          <nuxt-img
            format="webp"
            src="/img/projects/makeup.png"
            fit="contain"
            width="1728"
            height="5651"
            alt="a winking computer illustration"
          />
        </div>

        <div class="body">
          <h3>
            <a
              href="https://www.elizabeth-nthena.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              class="heading"
            >
              <span class="text">Makeup Artist</span>
              <span class="icon">
                <ExternalLinkIcon />
              </span>
            </a>

            <a
              href="https://www.github.com/exuseric/elizabeth-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-btn"
              aria-label="view on github"
            >
              <GithubIcon />
            </a>
          </h3>

          <p>
            This website showcases the artists' work seamlessly with a focus on
            usability, intuitive navigation and thoughtfully-paced content
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import ExternalLinkIcon from '~/assets/icons/external-link.svg?inline'
import GithubIcon from '~/assets/icons/bxl:github.svg?inline'

export default {
  name: 'IndexPageProjects',
  components: {
    ExternalLinkIcon,
    GithubIcon,
  },
}
</script>

<style lang="scss" scoped>
.projects__cards {
  @include flex-wrap-row;
  gap: $spacing-lg;
  padding: $section-padding $spacing-md;
}
.projects__heading {
  position: relative;
  z-index: 1;

  padding: $spacing-md;

  h2 {
    font-family: $heading;
    font-size: scale('h1');
    font-weight: 900;
    color: $neutral-500;
  }
}

.card {
  display: grid;
  grid-template-rows: 60% auto;

  // margin: $spacing-md auto;
  width: 100%;
  max-width: rem(400);
  height: rem(500);

  .cover,
  .body {
    width: 100%;
    height: 100%;
  }

  .body {
    @include center;
    align-self: end;
  }
}
.card > .body {
  padding: $spacing-sm;
  h3 {
    @include grid-flow-col;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding-block: $spacing-sm;

    .heading {
      @include grid-flow-col;
      gap: $spacing-sm;
      text-decoration: none;
      font-size: scale('h4');
      font-family: $heading;
      color: $neutral-900;

      .icon {
        @include center;
      }
    }
  }
}

.card > .cover {
  border-radius: 0.5rem;
  overflow: hidden;
  height: 100%;
  box-shadow: 0.3px 0.3px 1.3px -25px hsla(340, 49%, 8%, 0.013),
    2.2px 2.2px 4.3px -25px hsla(340, 49%, 8%, 0.022),
    5.7px 5.7px 10.3px -25px hsla(340, 49%, 8%, 0.025),
    11.6px 11.6px 20.4px -25px hsla(340, 49%, 8%, 0.026),
    21.3px 21.3px 37px -25px hsla(340, 49%, 8%, 0.03),
    40px 40px 63px -25px hsla(340, 49%, 8%, 0.07);

  img {
    object-position: top;
  }
}
</style>
