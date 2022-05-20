<template>
  <nuxt-link to="/" class="logo-link">
    <img
      src="~/assets/img/logo/dark.png"
      alt="A block abstract of the letter E"
      title="logo"
      width="3375"
      height="5396"
    />
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
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: flex-end;

  color: neutral('950');

  width: fit-content;
  height: fit-content;

  overflow: hidden;

  text-transform: capitalize;
  text-decoration: none;

  .txt {
    font-size: scale('body');

    align-self: center;
  }
}

.logo-link img {
  width: $icon-wh;
  height: calc($icon-wh / 1.5);

  object-fit: contain;
  object-position: center;
}

.logo-link:hover,
.logo-link:focus-visible {
  color: primary('50');
  background-color: primary('500');
  outline-color: primary('950');
}
</style>
