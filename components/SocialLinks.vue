<template>
  <ul class="socials">
    <li>
      <a
        href="https://www.github.com/exuseric/"
        class="icon-btn"
        title="Github: @exuseric"
        aria-label="github"
      >
        <Github />
      </a>
    </li>
    <li>
      <a
        href="https://www.twitter.com/exuseric/"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-btn"
        title="Twitter @exuseric"
        aria-label="twitter"
      >
        <Twitter />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/exuseric/"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-btn"
        title="Linkedin @exuseric"
        aria-label="linkedin"
      >
        <Linkedin />
      </a>
    </li>
    <li>
      <a
        href="https://www.be.net/exuseric/"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-btn"
        title="Behance @exuseric"
        aria-label="behance"
        aria-disabled="true"
        disabled="true"
      >
        <Behance />
      </a>
    </li>
  </ul>
</template>

<script>
import Github from '~/assets/icons/bxl:github.svg?inline'
import Twitter from '~/assets/icons/bxl:twitter.svg?inline'
import Linkedin from '~/assets/icons/bxl:linkedin.svg?inline'
import Behance from '~/assets/icons/bxl:behance.svg?inline'

export default {
  name: 'SocialLinks',
  components: { Github, Twitter, Linkedin, Behance },
}
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  flex-flow: row wrap;
  gap: $spacing-sm;

  width: fit-content;
  height: fit-content;

  list-style-type: none;
}
</style>
