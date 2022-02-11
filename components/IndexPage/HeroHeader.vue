<template>
  <header class="hero">
    <div class="heading">
      <h1 class="desc">
        Hello <span aria-label="vulcan greeting emoji">🖖</span>, I'm Eric and I
        am a frontend developer;
        <p class="large">I build resilient and inclusive user interfaces.</p>
      </h1>
    </div>

    <nuxt-link to="/contact" class="contact-btn">Let's Work Together</nuxt-link>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  @include center;
  height: 50rem;
}

.heading {
  height: 100%;
  width: 100%;
  padding: $pd-l $pd-m;

  h1 {
    font-size: scale('h6');
    color: color('mc');
    font-weight: 400;

    .large {
      font-family: family('heading');
      font-size: scale('h1');
      color: color('accent');
      padding: $pd-m 0;

      line-height: 1.125;
    }
  }
}

.contact-btn {
  position: relative;
  z-index: 1;

  @include center;
  justify-self: center;

  width: $box-btn-w;
  height: $box-btn-h;

  font-family: family('body');
  font-size: scale('h6');
  font-weight: 700;
  text-decoration: none;
  line-height: 1;

  color: color('light');
  background-color: color('dark');

  transition: all $transition;
  overflow: hidden;

  &:hover {
    // color: color('dark');
    &::before {
      animation: grow $transition forwards;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;

    width: 0;
    height: 0;

    border: 3px solid color('dark');
    border-radius: 50%;

    background-image: color('gradient-d');
    background-repeat: no-repeat;
  }

  @keyframes grow {
    50% {
      width: 2.5rem;
      height: 2.5rem;
    }
    100% {
      width: 2.5rem;
      height: 2.5rem;
      box-shadow: 0px 0px 25px 0px color('accent'), 0 0 20px 0px color('sec');
    }
  }
}
</style>
