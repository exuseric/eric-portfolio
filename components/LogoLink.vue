<template>
  <nuxt-link to="/" class="link link--logo">
    <span class="logo">
      <Logo />
    </span>
    <!-- <p class="txt">Eric Maina</p> -->
  </nuxt-link>
</template>
<script>
import Logo from '~/assets/img/logo/logo-with-name.svg?inline'

export default {
  components: { Logo },
}
</script>

<style lang="scss" scoped>
.logo {
  @include center;
  max-width: rem(72);
}
</style>
