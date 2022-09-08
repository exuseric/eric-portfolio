<template>
  <ul class="menu">
    <li>
      <nuxt-link
        class="link"
        to="/"
        >Home</nuxt-link
      >
      <ul class="submenu">
        <li>
          <nuxt-link
            class="link"
            to="/#projects"
            >Featured Projects</nuxt-link
          >
        </li>
      </ul>
    </li>
    <li>
      <nuxt-link
        class="link"
        to="/work"
        >Work</nuxt-link
      >
      <ul class="submenu">
        <li>
          <a
            class="link"
            href="https://www.github.com/exuseric/"
            target="_blank"
            rel="noopener noreferrer"
            title="Github @exuseric"
            aria-label="github profile">
            Github Repository.
          </a>
        </li>
        <li>
          <a
            class="link"
            href="https://www.behance.net/exuseric/"
            target="_blank"
            rel="noopener noreferrer"
            title="Behance @exuseric"
            aria-label="behance portfolio">
            Behance Portfolio.
          </a>
        </li>
      </ul>
    </li>
    <li>
      <nuxt-link
        class="link"
        to="/about"
        >About</nuxt-link
      >
      <ul class="submenu">
        <li>
          <nuxt-link
            class="link"
            to="/about#bio"
            >Bio</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="link"
            to="/about#skills"
            >Technical Skills</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            class="link"
            to="/about#interests"
            >Interests & Hobbies</nuxt-link
          >
        </li>
      </ul>
    </li>
    <li>
      <nuxt-link
        class="link"
        to="/contact"
        >Contact</nuxt-link
      >
      <ul class="submenu">
        <li class="email">
          <a
            class="email__link link"
            href="mailto:egathoni@pm.me">
            Email
          </a>
          <button
            ref="copy-btn"
            title="copy email to clipboard"
            class="email__button button button--center button--transparent button--small"
            @click="copyEmail">
            <CopyIcon />
            <span class="sr-only">copy email to clipboard</span>
          </button>
          <p
            v-if="copyStatus"
            class="email__alert"
            aria-live="polite">
            {{ copyMessage }}
          </p>
        </li>
        <li>
          <a
            class="link"
            href="https://www.linkedin.com/in/exuseric/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin @exuseric"
            aria-label="connect on linkedin">
            Linkedin.
          </a>
        </li>
        <li>
          <a
            class="link"
            href="https://www.linkedin.com/in/exuseric/"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter @exuseric"
            aria-label="DM on Twitter">
            Twitter.
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import CopyIcon from '~/assets/icons/copy.svg?inline';
export default {
  name: 'FooterMenu',
  components: {
    CopyIcon,
  },
  data() {
    return {
      copyMessage: '',
      copyStatus: false,
    };
  },
  methods: {
    copyEmail(e) {
      const email = 'egathoni@pm.me';
      navigator.clipboard
        .writeText(email)
        .then(() => {
          this.$refs['copy-btn'].classList.add('button--success');
          this.copyStatus = true;
          this.copyMessage = 'Copied';
        })
        .catch(() => {
          alert('Copy Failed!');
          this.copyStatus = false;
          this.copyMessage = 'Copy Failed';
        });

      setTimeout(() => {
        this.$refs['copy-btn'].classList.remove('button--success');
        this.copyStatus = false;
        this.copyMessage = '';
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  @include flex-wrap-row;
  justify-content: flex-start;
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(rem(150), 1fr));
  column-gap: $spacer-lg;
  row-gap: $spacer-lg;

  width: 100%;
  max-width: rem(750);
  margin: 0;
  padding: 0;
  list-style: none;

  @include screen(medium) {
    padding: 0;
  }

  .link {
    @include font(h6);
  }
}

.submenu {
  // margin: 0;
  margin-top: $spacer-sm;
  padding: 0;

  list-style: none;
  li {
    margin: $spacer-xs 0;
  }

  .link {
    @include font(body);
  }
}

.email {
  @include grid-flow-col;
  gap: $spacer-xs;

  &__alert {
    font-weight: 600;
    @include font('body-sm');
    @include bg-dark;
    padding-inline: $spacer-sm;
    border-radius: $round-sm;
  }
}
</style>
