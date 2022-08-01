<template>
  <section class="menu" aria-label="menu">
    <nav
      :class="`menu-wrapper ${
        isMenuOpen ? 'slide-in-blurred-top' : 'slide-out-blurred-top'
      }`"
    >
      <!-- Menu -->
      <ul class="links">
        <li v-for="link in links" :key="link.ref">
          <nuxt-link
            :to="link.ref"
            class="link"
            @click="setAttribute('aria-current', 'page')"
          >
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
      <!-- End Of Menu -->
    </nav>

    <!-- Button Group -->
    <div class="button-group">
      <!-- <nuxt-link to="/contact" class="link-btn contact-btn" role="button">
        Contact
      </nuxt-link> -->
      <!-- Social Menu -->
      <SocialLinks />
      <!-- End Of Socials -->
      <!-- Toggle Opening and Closing Of Mobile Menu -->
      <button
        class="icon-btn menu-btn"
        type="button"
        aria-label="menu"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <MenuIcon v-if="!isMenuOpen" />
        <CloseIcon v-if="isMenuOpen" />
      </button>
      <!-- End Of Toggle -->
    </div>
    <!-- End Of Button Group -->
  </section>
</template>

<script>
import MenuIcon from '~/assets/icons/menu.svg?inline'
import CloseIcon from '~/assets/icons/close.svg?inline'

export default {
  name: 'NavigationMenu',
  components: { MenuIcon, CloseIcon },
  data() {
    return {
      isMenuOpen: false,
      links: [
        { name: 'home', ref: '/' },
        { name: 'about', ref: '/about' },
        { name: 'contact', ref: '/contact' },
        { name: 'blog', ref: '/blog' },
      ],
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  @include grid-flow-col;
  gap: $spacer-sm;

  @include screen(small) {
    backdrop-filter: none;
    background-color: transparent;
  }
}
.socials {
  color: $light-gray;
}

.menu-wrapper {
  position: absolute;
  inset: rem(80) 0 auto;
  z-index: 2;
  padding-inline: $spacer-sm;

  background-color: $dark-gray;
  overflow: hidden;

  @include light-theme {
    background-color: $light-gray;
  }
}

.links {
  padding: 0;
  margin: $spacer-md 0;
  list-style: none;
}

.link {
  display: block;
  position: relative;
  isolation: isolate;

  text-transform: capitalize;
  text-decoration: none;

  color: $light-gray;
  padding: $spacer-md 0;

  border-radius: rem(5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 0;
    height: 100%;

    background-color: $primary-500;
    // opacity: 0.05;

    transform-origin: center;
    transition: all $transition;

    border-radius: rem(5);
  }

  &:focus-visible {
    color: $white;
    background-color: $info-500;
    outline-color: $info-900;

    &::before {
      background-color: $info-900;
    }
  }

  @include light-theme {
    color: $dark-gray;
  }
}

.button-group {
  @include grid-flow-col;
  gap: $spacer-sm;
}

.menu-btn,
.contact-btn {
  @include screen(small) {
    display: none;
  }
}

.contact-btn {
  color: $light-gray;
  padding: $spacer-xs;

  @include light-theme {
    color: $dark-gray;
  }
}

.menu-btn {
  color: $light-gray;
  background-color: $dark-gray;

  @include light-theme {
    color: $dark-gray;
    background-color: $mid-gray;
  }
}

.link:hover,
.nuxt-link-exact-active:hover {
  &::before {
    width: 100%;
    background-color: $info-500;
  }
}
.nuxt-link-exact-active,
.link:focus {
  // color: $primary-500;
  &::before {
    left: -5%;
    width: 90%;
  }

  @include screen(small) {
    &::before {
      left: 0;
      width: 40%;
    }
  }
}

/* Styling For Large Screens*/
@include screen(small) {
  // Menu
  .menu-wrapper,
  .links {
    @include flex-wrap-row;
    justify-content: space-between;
    align-items: center;
    gap: $spacer-sm;

    position: relative;
    inset: 0 0 auto;

    margin: 0;
    padding: 0;
  }
  .menu-wrapper {
    width: fit-content;

    background-color: transparent;

    animation: none;
    overflow: visible;

    @supports (backdrop-filter: blur(0)) {
      background-color: transparent;
      backdrop-filter: blur(0);
    }
  }
  .links {
    .socials {
      margin: 0;
    }
    .link {
      padding: $spacer-xs $spacer-sm;
    }
  }
  // End Of Menu
}
/* End Of Large Screen */
</style>
