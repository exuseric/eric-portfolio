<template>
  <header class="navbar">
    <div class="container navigation">
      <div class="navigation__top">
        <LogoLink class="navigation__top__logo" />
        <!-- Button Group -->
        <div class="navigation__top__button-group">
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
      <NavigationMenu
        :class="`navigation__menu ${
          isMenuOpen ? 'navigation__menu--show' : 'navigation__menu--hide'
        }`"
      />
      <!-- End Of Menu -->
    </div>
  </header>
</template>

<script>
import NavigationMenu from './NavigationMenu.vue'
import MenuIcon from '~/assets/icons/menu.svg?inline'
import CloseIcon from '~/assets/icons/close.svg?inline'
export default {
  name: 'MainNavigation',
  components: { MenuIcon, CloseIcon, NavigationMenu },
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
.navbar {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;

  width: 100%;
  height: fit-content;

  padding: $spacer-sm;
}

.navigation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  row-gap: $spacer-xs;

  min-height: $navigation-height;

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
    border-radius: $round-sm;
    overflow: hidden;

    @include frosted;
  }
}

@include screen(tablet) {
  .navigation {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    border-radius: $round-sm;
    padding-inline: $spacer-md;

    @include frosted;

    &__top {
      grid-column: 1 /2;
      grid-row: 1/-1;
      justify-self: start;
    }
    &__menu {
      grid-column: 2 /-1;
      grid-row: 1/-1;
      justify-self: end;
    }

    &__top,
    &__menu {
      background: transparent;
      backdrop-filter: none;
      border: none;
      overflow: visible;
      padding: 0;
    }
  }
}

.navigation {
  // margin: $spacer-xs auto;
  &__top {
    @include flex-wrap-row;
    justify-content: space-between;
    align-items: center;
    gap: $spacer-lg;

    @include screen(tablet) {
      gap: 0;
    }

    &__button-group {
      @include flex-wrap-row;
      justify-content: flex-end;
      align-items: center;
      gap: $spacer-sm;

      .button--menu {
        border-radius: $round-sm;

        @include screen(tablet) {
          display: none;
        }
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
      @include screen(tablet) {
        position: relative;
        animation: none;
      }
    }
  }
}
</style>
