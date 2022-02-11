<template>
  <ul class="socials">
    <li>
      <github-icon-link />
    </li>
    <li>
      <twitter-icon-link />
    </li>
  </ul>
</template>

<script>
import GithubIconLink from '~/components/Icons/GithubIconLink.vue'
import TwitterIconLink from '~/components/Icons/TwitterIconLink.vue'

export default {
  name: 'SocialLinks',
  components: { GithubIconLink, TwitterIconLink },
}
</script>

<style lang="scss" scoped>
.socials {
  @include grid-flow($flow: column, $gap: 0.625rem);
  justify-content: start;

  width: 100%;
  height: 100%;

  list-style-type: none;
}
</style>
