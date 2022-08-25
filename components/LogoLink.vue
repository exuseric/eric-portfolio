<template>
  <nuxt-link
    to="/"
    :class="`button button--logo button--icon button--transparent logo-link ${mode}-logo`"
  >
    <span class="icon icon--logo">
      <nuxt-img
        format="webp"
        :src="`/img/logo/logo-main.png`"
        alt="Logo: An abstract of the letter E"
        width="24"
        height="24"
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
