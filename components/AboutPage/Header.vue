<template>
  <header class="hero">
    <div class="hero-content">
      <div class="heading">
        <h1 class="title">
          Who is this guy? What does he do? How does he do it?
        </h1>
      </div>
      <div class="image">
        <img
          src="~/assets/img/me.jpeg"
          alt="A black and white silhouette potrait of Eric Maina"
          width="1728"
          height="2304"
        />
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
.hero {
  @include center;
  height: 50rem;
}

.hero-content {
  @include grid-flow($flow: row, $gap: 1.25rem);
  padding: 0 $pd-s;

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
  z-index: -1;

  width: 20rem;
  height: auto;

  margin-top: -10rem;

  border: 10px solid color('lc');
  overflow: hidden;

  @include mid-screen {
    width: 30rem;

    margin-top: 0;
  }
}
.title {
  font-size: scale('h1');
  font-family: family('heading');
  color: color('accent');
  line-height: 1.125;
}
</style>
