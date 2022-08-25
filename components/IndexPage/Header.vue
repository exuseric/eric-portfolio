<template>
  <header class="hero">
    <div class="container">
      <article class="hero__heading text-container">
        <h1>I build resilient and inclusive user interfaces.</h1>
        <p>
          Hi, I'm Eric, a<strong> Front-end Developer </strong> specialising in
          inclusive and accessible design and development.
        </p>
        <div class="cta-group">
          <nuxt-link to="/contact" class="button button--main" role="button">
            Let's Work Together
          </nuxt-link>
          <!-- <button class="sec-btn view-btn">Browse My Work</button> -->
        </div>
      </article>

      <div class="illustration">
        <!-- <Heart
          aria-hidden="true"
          role="img"
          width="100%"
          height="100%"
          class="heart"
        /> -->
        <img
          src="~/assets/illustration/heart.webp"
          width="400"
          height="400"
          alt="heart illustration"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { gsap } from 'gsap'
// import Heart from '~/assets/illustration/undraw_handcrafts_say_hello.svg?inline'

export default {
  name: 'IndexPageHeader',
  components: {
    // Heart,
  },
  mounted() {
    this.enterAnimation()
  },
  methods: {
    enterAnimation() {
      const tl = gsap.timeline({
        defaults: {
          ease: 'elastic.inOut(1.75, 1)',
          duration: 0.75,
          stagger: 0.1,
        },
      })

      tl.from('.illustration', {
        scale: 0,
        opacity: 0,
      }).from('.hero__heading', {
        y: 20,
        opacity: 0,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  place-content: center;

  position: relative;
  isolation: isolate;

  margin-top: $navigation-height;
  padding: $spacer-2xl $spacer-md;
}

.container {
  // width: 100%;

  @include screen(small) {
    @include grid-flow-col;
    align-items: center;
  }
}

.hero__heading {
  @include text-color;

  h1 {
    font-family: $heading;
    @include font(h3);
    margin-bottom: $spacer-lg;
  }
  p {
    @include font(h6);

    strong {
      color: $primary-500;
    }
  }

  .cta-group {
    @include flex-wrap-row;
    gap: $spacer-sm;
    margin-top: $spacer-md;
  }
}
</style>
