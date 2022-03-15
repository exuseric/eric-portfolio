<template>
  <article class="card">
    <div class="image">
      <!-- <img
        src="~/assets/img/pexels-pixabay-257092.jpg"
        alt="image"
        width="1920"
        height="1080"
        srcset=""
        loading="lazy"
      /> -->
    </div>
    <div class="body">
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
        complementary tea recipe.
      </p>

      <div class="links">
        <nuxt-link to="/work/cuppa" class="primary-btn-s"
          >tell me more</nuxt-link
        >
        <a
          href="https://www.github.com/exuseric/cuppa"
          target="_blank"
          rel="noopener noreferrer"
          class="primary-btn-s"
          >View Code</a
        >
      </div>
    </div>
  </article>
</template>

<script>
import ArrowIcon from '~/components/Icons/ArrowIcon.vue'
export default {
  name: 'IndexPageProjectCard',
  components: {
    ArrowIcon,
  },
}
</script>
<style lang="scss" scoped>
.card {
  @include grid-12($gap: 0);

  width: 100%;
  height: 25rem;
  max-width: 40rem;

  padding: $pd-m;

  color: neutral('50');
  background-color: neutral('950');
  overflow: hidden;
}
.image,
.body {
  width: 100%;
  height: 100%;
}

.image {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
}

.body {
  grid-row: 2 / -2;
  grid-column: 2 / -2;

  @include grid-row($row-count: 8, $row-height: 1fr, $gap: 0);
  z-index: 2;
  transition: background-color $transition;
}

.links,
.header,
.desc {
  padding: $pd-m;
}

.links {
  grid-row: -2 / -1;
  @include grid-flow($flow: column, $gap: 1.25rem);
  justify-self: start;
  align-self: end;
}

.header {
  grid-row: 1 / 2;
  position: relative;

  font-size: scale('h3');
  font-family: family('heading');
  color: neutral('50');

  border-bottom: 2px solid currentColor;
  // overflow: hidden;

  .title {
    @include grid-column($col-count: 2, $col-width: 1fr, $gap: 0);
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-transform: capitalize;
  }

  .icon {
    position: absolute;
    z-index: -1;

    @include center;
    width: $icon-wh * 14;
    height: $icon-wh * 14;
    color: primary('500');

    transform: translateX(-40rem);
    transition: transform $transition;
  }
}

.header:hover {
  .icon {
    transform: translateX(5rem);
  }
}
</style>
