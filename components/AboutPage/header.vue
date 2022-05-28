<template>
  <header class="hero" role="banner">
    <div class="hero__wrapper">
      <div class="image">
        <nuxt-img
          format="webp"
          src="/img/me/me.jpeg"
          width="1728"
          height="2304"
        />
      </div>
      <div class="heading">
        <h1 class="title wrapper">
          Hi, I'm Eric — I combine web fundamentals with modern web techniques
          to create products that are focused on being accessible, performant
          and responsive.
        </h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AboutPageHeader',
}
</script>

<style lang="scss" scoped>
.hero__wrapper {
  padding: $spacing-lg 0;

  .heading {
    @include center;

    padding: $spacing-md;
    margin-top: -$spacing-lg;
    margin-inline: auto;

    height: rem(400);

    color: $neutral-50;
    background-color: $primary-500;

    h1 {
      max-width: rem(950);
    }
  }
  .image {
    position: relative;
    z-index: 2;

    width: rem(300);
    height: rem(300);
    margin: auto;

    overflow: hidden;
    border-radius: 50%;
    border: rem(10) solid $neutral-50;

    @include screen(medium) {
      width: rem(350);
      height: rem(350);
    }
  }
}

.hero__wrapper {
  height: rem(800);
}
</style>
