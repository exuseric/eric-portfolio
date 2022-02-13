<template>
  <header class="hero">
    <div class="heading">
      <h1 class="desc">
        Hello <span aria-label="vulcan greeting emoji">🖖</span>, I'm Eric and I
        am a frontend developer;
        <p class="large">I build resilient and inclusive user interfaces.</p>
      </h1>
    </div>

    <nuxt-link to="/contact" class="contact-btn primary-btn"
      >Let's Work Together</nuxt-link
    >
  </header>
</template>

<script>
export default {
  name: 'IndexPageHeader',
}
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
  justify-self: center;

  @include mid-screen {
    justify-self: start;
  }
}
</style>
