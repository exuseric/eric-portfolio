<template>
  <div class="menu" aria-label="menu">
    <!-- Menu -->
    <nav class="menu__links">
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
    </nav>
    <!-- End Of Menu -->
  </div>
</template>

<script>
export default {
  name: 'NavigationMenu',
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
}
</script>

<style lang="scss" scoped>
.menu {
  // overflow: hidden;
  &__button-group {
    grid-row: 1 / 2;
  }
  &__links {
    grid-row: 2 / -1;
  }
}
.socials {
  color: $light-gray;
}

.links {
  padding: 0;
  // margin: $spacer-md 0;
  list-style: none;
}

.link {
  display: block;
  position: relative;
  isolation: isolate;

  @include text-color;
  text-transform: capitalize;
  text-decoration: none;

  padding: $spacer-md 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;

    width: 0;
    height: rem(32);

    background-color: $primary-500;

    transform-origin: center;
    transition: all $transition;
    transform: translate(-50%, -50%);
  }

  &:focus-visible {
    color: $info-50;
    // background-color: $info-500;
    outline-color: $info-900;

    &::before {
      background-color: $info-900;
    }
  }
}

.menu__button-group {
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
  // background-color: $dark-gray;
  background-color: transparent;

  @include light-theme {
    color: $dark-gray;
    // background-color: $mid-gray;
  }
}

.link:hover,
.nuxt-link-exact-active:hover {
  color: $info-50;
  &::before {
    left: 50%;
    width: 100%;
    background-color: $info-500;
  }
}
.nuxt-link-exact-active,
.link:focus {
  color: $primary-50;
  &::before {
    left: 50%;
    width: 100%;
  }
}

/*
Styling For Large Screens
*/
@include screen(small) {
  // Menu
  .menu__links,
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
  .menu__links {
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
/*
End Of Large Screen
*/
</style>
