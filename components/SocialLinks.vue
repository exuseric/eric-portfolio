<template>
  <ul class="socials">
    <li>
      <a
        href="https://www.github.com/exuseric/"
        class="button button--center button--transparent"
        title="Github"
        aria-label="github"
      >
        <span class="icon">
          <Github />
        </span>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/exuseric/"
        target="_blank"
        rel="noopener noreferrer"
        class="button button--center button--transparent"
        title="LinkedIn"
        aria-label="linkedin"
        disabled
      >
        <span class="icon">
          <LinkedIn />
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
import Github from '~/assets/icons/bxl:github.svg?inline'
import LinkedIn from '~/assets/icons/bxl:linkedin.svg?inline'

export default {
  name: 'SocialLinks',
  components: { Github, LinkedIn },
}
</script>

<style lang="scss" scoped>
.socials {
  @include flex-wrap-row;
  justify-content: space-between;
  align-items: center;
  gap: $spacer-xs;

  width: fit-content;
  height: fit-content;

  margin: 0;
  padding: 0;

  list-style-type: none;

  color: $light-gray;
  // background-color: $dark-gray;
  border-radius: rem(5);

  @include light-theme {
    color: $dark-gray;
    // background-color: $light-gray;
  }
}
</style>
