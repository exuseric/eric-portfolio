<template>
  <header class="hero" role="banner">
    <div class="hero-content">
      <div class="heading">
        <h1 class="title">
          Eric Maina; front-end developer.
          <abbr title="User Interface">ui</abbr> designer
        </h1>
      </div>
      <picture class="image">
        <source srcset="~/assets/img/me.avif" type="image/avif" />
        <source srcset="~/assets/img/me.webp" type="image/webp" />
        <img
          src="~/assets/img/me.jpeg"
          alt="A black and white silhouette portrait of Eric Maina"
          width="1728"
          height="2304"
        />
      </picture>
      <!-- <div class="image">
      </div> -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'AboutPageHeader',
}
</script>

<style lang="scss" scoped>
.hero {
  @include center;
  height: 50rem;
}

.hero-content {
  // @include grid-flow($flow: row, $gap: 1.25rem);
  @include grid-12(0);
  padding: 0 $pd-s;
  height: auto;
  z-index: -1;

  @include mid-screen {
    @include grid-flow($flow: column, $gap: 1.25rem);
    padding: 0 $pd-l;
  }
}
.heading,
.image {
  justify-self: center;
}

.image {
  grid-column: 2 / -2;
  grid-row: 4 / -1;
  z-index: -1;

  width: 20rem;
  height: auto;

  // margin-top: -10rem;

  // border: 20px solid neutral( '950');
  border-radius: 30px;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  @include mid-screen {
    grid-column: -4 / -1;
    grid-row: 2 / -2;

    width: 30rem;
    height: 100%;

    margin-top: 0;
  }
}

.heading {
  grid-column: 1 / -1;
  grid-row: 1 / -1;

  padding: $pd-s;

  @include mid-screen {
    grid-column: 1 / -5;
    padding: 0 $pd-l;
  }
}
.title {
  font-size: scale('h1');
  font-family: family('small cap');
  color: primary('500');
  line-height: 1.125;
}
</style>
