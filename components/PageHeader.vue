<template>
  <header class="hero">
    <div class="container">
      <div class="heading">
        <h1>{{ title }}</h1>

        <div class="text-group">
          <p>Front-end Developer.</p>
          <p>Designer.</p>
          <p>Ailurophile.</p>
          <p>Tea Cup.</p>
        </div>
      </div>

      <div class="illustration">
        <img
          src="~/assets/illustration/undraw_personal_file_re_5joy.svg"
          alt="illustration"
          aria-hidden="true"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { gsap } from 'gsap'
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: 'Eric Maina',
    },
    illustration: {
      type: String,
      default: 'undraw_personal_file_re_5joy.svg',
    },
  },
  mounted() {
    this.enterAnimation()
  },
  methods: {
    enterAnimation() {
      const tl = gsap.timeline({
        defaults: {
          ease: 'elastic.inOut(1.75, 1)',
          duration: 0.45,
          stagger: 0.1,
        },
      })

      tl.from('.illustration', {
        scale: 0,
        opacity: 0,
      }).from('.heading', {
        y: 20,
        opacity: 0,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  place-content: center;

  position: relative;
  isolation: isolate;

  margin-top: $navigation-height;
  padding: $spacer-lg $spacer-sm 0;

  background-color: $black;

  @include light-theme {
    background-color: $white;
  }

  @include screen(small) {
    padding: $spacer-lg $spacer-md 0;
  }
}

.illustration {
  $size: rem(400);

  width: 100%;
  max-width: rem(350);

  // display: none;

  @include screen(small) {
    display: block;
  }
}
.container {
  width: 100%;
  @include screen(small) {
    @include grid-flow-col;
    align-items: center;
  }
}

.text-group {
  @include flex-wrap-row;
  justify-content: flex-start;
  gap: $spacer-xs;
}

.heading {
  margin-bottom: $spacer-md;

  height: fit-content;
  color: $light-gray;

  @include light-theme {
    color: $dark-gray;
  }

  h1 {
    font-size: scale(h1);
    font-family: $heading;
    line-height: rem(56);
  }
  p {
    font-size: scale(h6);
    font-family: $body;
    font-weight: 100;
  }
}
</style>
