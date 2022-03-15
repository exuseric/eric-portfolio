<template>
  <p class="built">
    Made with <span focusable="false" aria-label="black heart emoji">🖤</span>
    and
    <a
      href="https://nuxtjs.org"
      target="_blank"
      rel="noopener noreferrer"
      class=""
      >Nuxt.js</a
    >. Hosted on
    <a
      href="https://netlify.com"
      target="_blank"
      rel="noopener noreferrer"
      class=""
      >Netlify</a
    >
    &amp;
    <a
      href="https://github.com/exuseric"
      target="_blank"
      rel="noopener noreferrer"
      class=""
      >Github</a
    >
  </p>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.built {
  text-align: center;
}

a {
  color: primary('500');
}
</style>
