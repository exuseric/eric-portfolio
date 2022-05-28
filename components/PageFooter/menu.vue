<template>
  <ul class="menu">
    <li>
      <nuxt-link to="/">Home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about">About</nuxt-link>
      <ul class="submenu">
        <li><nuxt-link to="/about#bio">Bio</nuxt-link></li>
        <li><nuxt-link to="/about#skills">Skills</nuxt-link></li>
        <li><nuxt-link to="/about#interests">Interests</nuxt-link></li>
      </ul>
    </li>
    <li>
      <nuxt-link to="/work">Work</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <ul class="submenu">
        <li>
          <a href="mailto:ericmaina.gathoni@gmail.com">
            <span class="icon-btn">
              <Email />
            </span>
            <span class="text">ericmaina.gathoni@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/exuseric/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin @exuseric"
            aria-label="connect on linkedin"
          >
            <span class="icon-btn">
              <Linkedin />
            </span>
            <span class="text">Connect on Linkedin.</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/exuseric/"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter @exuseric"
            aria-label="DM on Twitter"
          >
            <span class="icon-btn">
              <Twitter />
            </span>
            <span class="text">Message me on Twitter.</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import Twitter from '~/assets/icons/bxl:twitter.svg?inline'
import Linkedin from '~/assets/icons/bxl:linkedin.svg?inline'
import Email from '~/assets/icons/email.svg?inline'
export default {
  name: 'PageFooterMenu',
  components: { Twitter, Linkedin, Email },
}
</script>

<style lang="scss" scoped>
.menu {
  @include flex-wrap-row;
  justify-content: flex-start;
  gap: $spacing-lg;

  max-width: rem(700);
  // width: 100%;
  padding: $section-padding-sm 0;
  margin: 0;
  list-style: none;

  a {
    font-size: scale('h6');
    font-weight: 600;
    color: $neutral-900;
  }

  .submenu {
    margin: 0;
    padding: 0;

    list-style: none;
    li {
      margin: $spacing-sm 0;
    }

    a {
      @include flex-wrap-row;
      align-items: center;
      gap: $spacing-sm;

      font-size: scale('body');
      color: $neutral-500;
    }
  }

  @include screen(medium) {
    padding: 0;
  }
}

.menu,
.submenu {
  a {
    text-decoration: none;
  }
}
</style>
