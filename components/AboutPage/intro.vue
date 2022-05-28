<template>
  <section id="bio" class="intro wrapper" aria-label="Introduction">
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
  padding: $section-padding-sm $spacing-md;

  p {
    font-size: scale('h4');
    font-family: $heading;

    max-width: rem(950);
  }
}
</style>
