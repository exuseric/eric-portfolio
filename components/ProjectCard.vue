<template>
  <article class="card">
    <div class="cover">
      <nuxt-img
        src="/img/projects/pexels-media-4497731-1651340345560.jpeg"
        alt="cuppa"
        width="100%"
        height="100%"
        fit="cover"
      />
    </div>
    <div class="body text-container">
      <header class="heading">
        <h3>
          <a
            href="https://cuppa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> Cuppa </span>

            <span>
              <ExternalLink />
            </span>
          </a>
        </h3>
        <div class="btn-group">
          <a
            href="https://www.github.com/exuseric/cuppa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </header>

      <p>
        A weather website application that delivers a nice tea recipe with your
        weather.
      </p>
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
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  inset: 0 0 auto;
  z-index: 1;

  width: 100%;
  max-width: rem(750);
  height: fit-content;

  border-radius: rem(5);
  overflow: hidden;
}

.cover {
  width: 100%;
  // height: 100%;
  height: rem(250);

  border-radius: rem(5);
  overflow: hidden;
}

.body {
  position: relative;
  z-index: 2;
  width: 90%;
  height: fit-content;

  margin-inline: auto;
  margin-top: -$spacer-lg;
  padding: $spacer-md;

  color: $light-gray;
  background-color: $dark-gray;

  border-radius: rem(5);

  @include light-theme {
    color: $dark-gray;
    background-color: $light-gray;
  }
}

.heading {
  @include grid-flow-col;
  align-items: center;

  margin-bottom: $spacer-sm;

  h3 > a {
    @include grid-flow-col;
    gap: $spacer-xs;
    align-items: center;

    font-size: scale(h6);
    text-decoration: none;
  }

  .btn-group {
    @include flex-wrap-row;
    align-items: center;
    gap: $spacer-sm;
  }
}
</style>
