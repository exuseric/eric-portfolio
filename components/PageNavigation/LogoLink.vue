<template>
  <nuxt-link to="/" class="logo-link">
    <img src="~/assets/img/logo/dark.png" alt="Eric's Logo" />
    <span class="txt">Eric Maina</span>
  </nuxt-link>
</template>
<script>
export default {
  name: 'LogoLink',
}
</script>
<style lang="scss" scoped>
.logo-link {
  @include grid-flow($flow: column, $gap: 0.625rem);

  width: fit-content;
  height: $icon-wh;

  overflow: hidden;

  text-transform: capitalize;
  text-decoration: none;

  .txt {
    font-size: scale('body');
    color: color('dark');
    align-self: end;
  }
}

.logo-link img {
  width: $icon-wh;
  height: $icon-wh;

  object-fit: contain;
  object-position: center;
}
</style>
