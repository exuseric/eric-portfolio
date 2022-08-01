<template>
  <section class="bio container" aria-label="bio">
    <div class="text-container">
      <p>
        Hi, there! I'm Eric; I've been a web developer from the day I wrote my
        first HTML and got hooked on the adaptive fluidity aspect of the web.
      </p>
      <p>
        Through my learning I discovered web accessibility and since I've been
        spending most of my time trying to understand how I can build
        applications that offer excellent user experience and are inclusive and
        accessible.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPageIntro',
}
</script>

<style lang="scss" scoped>
.intro {
  p {
    font-size: scale(h6);
    margin: $spacer-xs 0;
  }
}
</style>
