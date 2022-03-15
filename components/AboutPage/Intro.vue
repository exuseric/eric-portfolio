<template>
  <section class="intro" aria-label="Introduction">
    <header class="header">
      <h2 class="title">
        Hi, I'm Eric — I combine
        <mark>web fundamentals with modern web techniques</mark> to create
        products that are focused on being accessible, performant and
        responsive.
      </h2>
    </header>

    <p>
      I love the web and spend a significant portion of my time rummaging
      through it for entertainment, learning and creative inspiration and
      through my travels I got hooked on accessibility and ever since I've spent
      most of my time trying to understand how I can build applications that
      offer good visual, functional and accessible design.
    </p>
  </section>
</template>

<script>
export default {
  name: 'AboutPageIntro',
}
</script>

<style lang="scss" scoped>
.intro {
  padding: $pd-l $pd-m;
  max-width: 200ch;

  p {
    margin: $pd-m 0;
    max-width: 80ch;
  }
}
.header {
  // @include center;
  text-align: left;
  width: 100%;
  h2 {
    font-family: family('heading');
    font-size: scale('h3');
    font-weight: normal;
  }
}
</style>
