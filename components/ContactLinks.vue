<template>
  <ul>
    <li>
      <a
        href="https://www.linkedin.com/in/exuseric/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin @exuseric"
        role="button"
      >
        <span class="icon" aria-hidden="true">
          <Linkedin />
        </span>
        <span class="text sr-only">Linkedin.</span>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/exuseric/"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter @exuseric"
        role="button"
      >
        <span class="icon" aria-hidden="true">
          <Twitter />
        </span>
        <span class="text sr-only">Twitter.</span>
      </a>
    </li>
    <li>
      <a href="mailto:ericmaina.gathoni@gmail.com" role="button">
        <span class="icon" aria-hidden="true">
          <Email />
        </span>
        <span class="text">ericgathoni@pm.me</span>
      </a>
    </li>
  </ul>
</template>

<script>
import Twitter from '~/assets/icons/bxl:twitter.svg?inline'
import Linkedin from '~/assets/icons/bxl:linkedin.svg?inline'
import Email from '~/assets/icons/email.svg?inline'
export default {
  name: 'ContactLinks',
  components: { Twitter, Linkedin, Email },
}
</script>

<style lang="scss" scoped>
ul {
  @include flex-wrap-row;
  gap: $spacer-md;
  padding: 0;
  width: 100%;
  height: fit-content;
  list-style: none;

  a {
    @include flex-wrap-row;
    align-items: center;
    gap: $spacer-xs;

    text-decoration: none;

    padding: $spacer-xs;

    span {
      @include center;
      height: 100%;
    }

    .icon {
      width: fit-content;
    }

    .text {
      color: inherit;
      font-weight: 600;
    }

    &:hover {
      color: $primary-500;
      background-color: $primary-50;
    }
  }
}
</style>
