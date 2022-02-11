<template>
  <article class="card">
    <div class="image">
      <img
        src="https://placeholder.com/20x20"
        alt="image"
        width="1920"
        height="1080"
        srcset=""
        loading="lazy"
      />
      <div class="overlay"></div>
    </div>
    <div class="card-body">
      <header class="header">
        <h2 class="title">
          <a
            href="https://cuppa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            >cuppa</a
          >
          <span class="icon">
            <ArrowIcon />
          </span>
        </h2>
      </header>

      <p class="desc">
        A weather website that gives you the weather information with a
        complementary tea recipe. Built with vue.js.
      </p>

      <div class="links">
        <nuxt-link to="/work/cuppa" class="link">tell me more</nuxt-link>
        <a
          href="https://www.github.com/exuseric/cuppa"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          >View Code</a
        >
        <a
          href="https://www.cuppa.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          class="live-link"
          >live site</a
        >
      </div>
    </div>
  </article>
</template>

<script>
import ArrowIcon from '~/components/Icons/ArrowIcon.vue'
export default {
  components: {
    ArrowIcon,
  },
}
</script>

<style lang="scss" scoped>
.card {
  @include grid(
    $col-width: 1fr,
    $col-count: 8,
    $row-height: 1fr,
    $row-count: 8,
    $col-gap: 0,
    $row-gap: 0.625rem
  );
  z-index: 1;

  width: 100%;
  height: 40rem;

  overflow: hidden;
}

.image {
  @include center;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: -1;
}

.card-body {
  grid-column: 1 / -1;
  grid-row: 4 / -1;
  @include grid-row($row-count: 3, $row-height: 30%, $gap: $pd-m);

  background: color('light');
  backdrop-filter: blur(15px);

  padding: $pd-m;

  overflow: hidden;

  @include mid-screen {
    grid-column: 3 / -3;
    grid-row: 2 / -2;

    padding: $pd-l;
  }
}

.header {
  position: relative;
  width: 100%;
}

.title {
  font-size: scale('h1');
  font-family: family('heading');

  a {
    width: 100%;
    color: color('dark');
    text-transform: capitalize;
    text-decoration: none;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 10%;
    z-index: -1;
    transform: translate(-100%, -50%);

    @include center;
    width: auto;
    height: 15rem;

    color: color('accent-l');

    opacity: 0;
  }
  &:hover {
    .icon {
      animation: reveal $transition forwards;
    }
  }
}

.links {
  // @include grid-flow($flow: column, $gap: 1.25rem);
  @include grid(
    $col-width: 1fr,
    $col-count: 3,
    $row-height: 1fr,
    $row-count: 2,
    $col-gap: 0.625rem,
    $row-gap: 0.625rem
  );
  justify-content: space-between;

  .live-link {
    grid-column: 1 / -1;
    grid-row: 2 / -1;

    color: color('light');
    background-color: color('dark');

    width: 100%;
    height: $box-btn-h;
  }
  .link {
    color: color('accent');
  }
  .link:nth-child(2) {
    grid-column: 3 / -1;
  }

  .link,
  .live-link {
    &:hover,
    &:focus-visible {
      color: color('accent-l');
      background-color: color('accent');
      outline-color: color('accent-d');
    }
  }

  .link,
  .live-link {
    @include center;
    width: 100%;
    padding: $pd-s;

    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
  }
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
