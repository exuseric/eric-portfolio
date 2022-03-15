<template>
  <header class="hero">
    <div class="heading">
      <h1 class="desc">
        <p class="mid">Eric Maina.</p>
        <p class="large">
          I build resilient and inclusive user interfaces for the web.
        </p>
      </h1>
    </div>
    <div class="contact">
      <nuxt-link to="/contact" class="contact__btn primary-btn">
        Let's Work Together
      </nuxt-link>

      <a href="mailto:ericmaina.gathoni@gmail.com" class="contact__email">
        ericmaina.gathoni@gmail.com
      </a>
    </div>
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
  height: 40rem;
}

.heading {
  height: 100%;
  width: 100%;
  padding: $pd-m;

  h1 {
    .mid {
      font-size: scale('h4');
    }

    .large {
      font-family: family('small cap');
      font-size: scale('h1');
      color: primary('500');
      padding: $pd-s 0;

      line-height: 1.125;
    }
  }
}

.contact {
  @include grid-column(
    $col-count: auto-fit,
    $col-width: minmax(12.5rem, 1fr),
    $gap: $pd-m
  );
  height: auto;
  width: 25rem;

  padding: $pd-m;

  @include mid-screen {
    width: 40rem;
  }
}

.contact__btn {
  // justify-self: center;
  color: neutral('50');
  background-color: neutral('950');
}

.contact__email {
  @include center;
  position: relative;

  width: $box-btn-w;
  height: $box-btn-h;

  color: neutral('950');
  text-decoration: none;

  transition: all $transition;

  border: 2px solid currentColor;
}

.contact__email:hover {
  color: neutral('50');
  background-color: neutral('950');
}
</style>
