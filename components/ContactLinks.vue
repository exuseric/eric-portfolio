<template>
  <ul>
    <li>
      <a
        href="https://www.linkedin.com/in/exuseric/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin @exuseric"
        role="button"
        class="link link--icon"
      >
        <span class="icon" aria-hidden="true">
          <Linkedin />
        </span>
        <span class="text">Linkedin.</span>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/exuseric/"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter @exuseric"
        role="button"
        class="link link--icon"
      >
        <span class="icon" aria-hidden="true">
          <Twitter />
        </span>
        <span class="text">Twitter.</span>
      </a>
    </li>
    <li>
      <a href="mailto:ericmaina.gathoni@gmail.com" class="link" role="button">
        <span class="text">ericgathoni@pm.me</span>
      </a>
    </li>
  </ul>
</template>

<script>
import Twitter from '~/assets/icons/bxl:twitter.svg?inline'
import Linkedin from '~/assets/icons/bxl:linkedin.svg?inline'
export default {
  name: 'ContactLinks',
  components: { Twitter, Linkedin },
}
</script>

<style lang="scss" scoped>
ul {
  @include flex-wrap-row;
  gap: $spacer-xs;
  align-items: center;
  padding: 0;
  width: 100%;
  height: fit-content;
  list-style: none;
}
</style>
