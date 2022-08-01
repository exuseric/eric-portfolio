<template>
  <ul class="menu">
    <li>
      <nuxt-link to="/">Home</nuxt-link>
      <ul class="submenu">
        <li>
          <nuxt-link to="/#projects">Featured Projects</nuxt-link>
        </li>
      </ul>
    </li>
    <li>
      <nuxt-link to="/work">Work</nuxt-link>
      <ul class="submenu">
        <li>
          <a
            href="https://www.github.com/exuseric/"
            target="_blank"
            rel="noopener noreferrer"
            title="Github @exuseric"
            aria-label="github profile"
          >
            Github Repository.
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/exuseric/"
            target="_blank"
            rel="noopener noreferrer"
            title="Behance @exuseric"
            aria-label="behance portfolio"
          >
            Behance Portfolio.
          </a>
        </li>
      </ul>
    </li>
    <li>
      <nuxt-link to="/about">About</nuxt-link>
      <ul class="submenu">
        <li><nuxt-link to="/about#bio">Bio</nuxt-link></li>
        <li><nuxt-link to="/about#skills">Technical Skills</nuxt-link></li>
        <li>
          <nuxt-link to="/about#interests">Interests & Hobbies</nuxt-link>
        </li>
      </ul>
    </li>
    <li>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <ul class="submenu">
        <li class="email">
          <a href="mailto:egathoni@pm.me"> egathoni@pm.me </a>
          <button
            ref="copy-btn"
            title="copy email to clipboard"
            class="copy-btn"
            @click="copyEmail"
          >
            <CopyIcon />
            <span class="sr-only">copy email to clipboard</span>
          </button>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/exuseric/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin @exuseric"
            aria-label="connect on linkedin"
          >
            Linkedin.
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
            Twitter.
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import CopyIcon from '~/assets/icons/copy.svg?inline'
export default {
  name: 'PageFooterMenu',
  components: {
    CopyIcon,
  },
  methods: {
    copyEmail(e) {
      const email = 'egathoni@pm.me'
      // const board = new Clipboard()
      // board.writeText(email)
      // console.log(board)
      navigator.clipboard
        .writeText(email)
        .then(() => {
          this.$refs['copy-btn'].classList.add('copy-btn--active')
        })
        .catch(() => {
          alert('Copy Failed!')
        })

      setTimeout(() => {
        this.$refs['copy-btn'].classList.remove('copy-btn--active')
      }, 1500)
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  // @include flex-wrap-row;
  // justify-content: flex-start;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(rem(150), 1fr));
  column-gap: $spacer-xs;
  row-gap: $spacer-lg;

  width: 100%;
  max-width: rem(750);
  margin: 0;
  padding: 0;
  list-style: none;

  a {
    font-family: $heading;
    font-size: scale('h5');
    font-weight: 600;
    color: $light-gray;

    @include light-theme {
      color: $dark-gray;
    }
  }

  @include screen(medium) {
    padding: 0;
  }
}

.submenu {
  // margin: 0;
  margin-top: $spacer-xs;
  padding: 0;

  list-style: none;
  li {
    margin: $spacer-xs 0;
  }

  a {
    @include flex-wrap-row;
    align-items: center;
    gap: $spacer-xs;

    font-family: $body;
    font-size: scale('body');
    font-weight: 600;
    color: $light-gray;

    @include light-theme {
      color: $dark-gray;
    }
  }
}

.menu,
.submenu {
  a {
    text-decoration: none;

    &:hover {
      color: $primary-500;
    }
  }
}

.email {
  @include flex-wrap-row;
  gap: $spacer-xs;
}
.copy-btn {
  position: relative;
  inset: 0 0 auto;
  z-index: 1;

  @include center;
  font-size: scale(h5);
  font-weight: 600;
  padding: $spacer-xs;

  color: $light-gray;
  background-color: transparent;

  @include light-theme {
    color: $mid-gray;
  }
}

.copy-btn--active {
  color: $success-500;
  // background-color: $success-500;
}

.copy-btn::before {
  content: 'Copied';
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -40%);
  font-size: scale(body-sm);

  width: fit-content;
  padding: $spacer-xs;
  opacity: 0;

  color: $success-900;
  background-color: $success-500;
  border-radius: rem(5);

  transition: all $transition;
}

.copy-btn--active::before {
  opacity: 1;
  transform: translate(-50%, -50%);
}
</style>
