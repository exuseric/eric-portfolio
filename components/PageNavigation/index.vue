<template>
  <header class="nav-bar">
    <div class="container navigation">
      <div class="navigation__top">
        <LogoLink class="navigation__logo" />
        <!-- Button Group -->
        <div class="navigation__button-group">
          <SocialLinks />
          <!-- Menu Toggle -->

          <button
            class="button button--menu button--center button--main"
            type="button"
            aria-label="menu"
            :aria-expanded="isMenuOpen"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="icon">
              <MenuIcon v-if="!isMenuOpen" />
              <CloseIcon v-if="isMenuOpen" />
            </span>
          </button>
          <!-- End Of Menu Toggle -->
        </div>
        <!-- End Of Button Group -->
      </div>
      <!-- Menu -->
      <PageNavigationMenu
        :class="`navigation__menu ${
          isMenuOpen ? 'navigation__menu--show' : 'navigation__menu--hide'
        }`"
      />
      <!-- End Of Menu -->
    </div>
  </header>
</template>

<script>
import MenuIcon from '~/assets/icons/menu.svg?inline'
import CloseIcon from '~/assets/icons/close.svg?inline'
export default {
  name: 'MainNavigation',
  components: { MenuIcon, CloseIcon },
  data() {
    return {
      isMenuOpen: false,
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
.nav-bar {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;

  width: 100%;
  height: fit-content;

  padding: 0 $spacer-xs;
}

.navigation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  row-gap: $spacer-xs;

  &__top {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
  &__menu {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }

  &__top,
  &__menu {
    padding: $spacer-sm;
    border-radius: $round-lg;
    overflow: hidden;

    @include frosted;

    @include screen(small) {
      background: transparent;
      backdrop-filter: none;
      border: none;
      overflow: visible;
    }
  }

  @include screen(small) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    border-radius: $round-lg;

    @include frosted;

    &__top {
      grid-column: 1 /2;
      grid-row: 1/-1;
    }
    &__menu {
      grid-column: 2 /-1;
      grid-row: 1/-1;
      justify-self: end;
    }
  }
}

.navigation {
  min-height: $navigation-height;
  margin: $spacer-xs auto;
  &__top {
    @include flex-wrap-row;
    justify-content: space-between;
    align-items: center;
    gap: $spacer-lg;
  }

  &__button-group {
    @include flex-wrap-row;
    justify-content: flex-end;
    align-items: center;
    gap: $spacer-sm;
    .button--menu {
      border-radius: $round-sm;
      @include screen(small) {
        display: none;
      }
    }
  }

  &__menu {
    &--show {
      animation: slide-in-blurred-top $transition forwards;
    }
    &--hide {
      position: absolute;
      animation: slide-out-blurred-top $transition forwards;
      @include screen(small) {
        position: relative;
        animation: none;
      }
    }
  }
}
</style>
