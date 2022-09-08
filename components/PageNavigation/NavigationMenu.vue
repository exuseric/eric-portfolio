<template>
  <div
    class="menu"
    aria-label="menu">
    <!-- Menu -->
    <nav class="menu__nav">
      <ul class="links menu__nav__links">
        <li
          v-for="link in links"
          :key="link.ref">
          <nuxt-link
            :to="link.ref"
            class="link"
            @click="setAttribute('aria-current', 'page')">
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <!-- End Of Menu -->
    <SocialLinks />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      links: [
        { name: 'home', ref: '/' },
        { name: 'about', ref: '/about' },
        { name: 'contact', ref: '/contact' },
        { name: 'blog', ref: '/blog' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  overflow: hidden;
  &__button-group {
    grid-row: 1 / 2;
  }
  &__nav {
    grid-row: 2 / -1;

    &__links {
      padding: 0;
      // margin: $spacer-md 0;
      list-style: none;
    }
  }
}
.socials {
  color: $light-gray;
}

.link {
  display: block;
  position: relative;
  isolation: isolate;

  font-weight: 600;
  text-decoration: none;
  text-transform: capitalize;

  width: 100%;
  padding-block: $spacer-lg;

  border-radius: $round-sm;

  @include font('body-lg');

  @include screen(tablet) {
    padding-block: $spacer-xs;
  }

  .icon {
    @include center;
    font-size: inherit;
  }

  &--icon {
    @include grid-flow-col;
  }

  &--icon-only {
    @include center;
  }
}
.nuxt-link-exact-active {
  @include text-color('primary', '50');
  @include bg-color('primary', '500');
  border-color: currentColor;
}

.menu__button-group {
  @include grid-flow-col;
  gap: $spacer-sm;
}

.menu-btn,
.contact-btn {
  @include screen(tablet) {
    display: none;
  }
}

.menu-btn {
  @include text-main;
}

/*
Styling For Large Screens
*/
@include screen(tablet) {
  .menu {
    @include grid-flow-col;
    gap: $spacer-md;
    padding: 0;

    &__nav {
      padding-right: $spacer-md;
      margin: 0;
      width: fit-content;

      background-color: transparent;
      border-right: 2px solid currentColor;

      animation: none;
      overflow: visible;

      @supports (backdrop-filter: blur()) {
        background-color: transparent;
        backdrop-filter: blur(0);
      }

      &__links {
        margin: 0;
        padding: 0;
        @include flex-wrap-row;
        justify-content: space-between;
        align-items: center;
        gap: $spacer-sm;

        position: relative;
        inset: 0 0 auto;
      }
    }
  }
}
/*
End Of Large Screen
*/
</style>
