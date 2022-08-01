<template>
  <nuxt-link to="/" :class="`logo-link ${mode}-logo`">
    <span class="logo icon-btn">
      <nuxt-img
        format="webp"
        :src="`/img/logo/logo-main.png`"
        alt="Logo: An abstract of the letter E"
        width="6250"
        height="6250"
      />
    </span>
    <p class="txt">Eric Maina</p>
  </nuxt-link>
</template>
<script>
export default {
  name: 'LogoLink',
  props: {
    mode: {
      type: String,
      default: 'light',
    },
  },
}
</script>
<style lang="scss" scoped>
.logo-link {
  // @include grid-flow-col;
  @include flex-wrap-row;
  align-items: center;

  color: $light-gray;

  width: fit-content;
  // height: $spacer-md;
  padding-right: $spacer-xs;

  overflow: hidden;
  text-transform: capitalize;
  text-decoration: none;

  .txt {
    font-weight: 600;
  }

  @include light-theme {
    color: $dark-gray;
  }
}

.logo {
  max-width: rem(40);

  background-color: transparent;
}

.logo-link:hover {
  background-color: $primary-50;
}
.logo-link:focus-visible,
.logo-link:focus {
  color: $white;
  background-color: $info-500;
  outline-color: $info-900;
}
</style>
