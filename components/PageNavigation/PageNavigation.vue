<template>
  <header :class="`navigation ${isMenuOpen ? 'nav-open' : 'nav-closed'}`">
    <div class="top">
      <LogoLink />
      <button class="toggle-btn" @click="isMenuOpen = !isMenuOpen">
        <MenuIcon :is-menu-open="isMenuOpen" />
        <span class="sr-only">Menu</span>
      </button>
    </div>
    <div :class="`bottom ${isMenuOpen ? 'show-animate' : 'hide-animate'}`">
      <Menu />
      <SocialLinks />
    </div>
  </header>
</template>

<script>
import LogoLink from '~/components/PageNavigation/LogoLink.vue'
import Menu from '~/components/PageNavigation/Menu.vue'
import MenuIcon from '~/components/Icons/MenuIcon.vue'

export default {
  components: { LogoLink, Menu, MenuIcon },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  mounted() {
    this.checkMedia()
  },
  methods: {
    checkMedia() {
      const isLargeScreen = window.matchMedia('(min-width: 1224px)').matches

      if (isLargeScreen) {
        this.isMenuOpen = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  grid-column: 1 / -1;
  display: grid;
  grid-template-rows: $nav-height 1fr;

  position: sticky;
  top: 0;
  z-index: 99;

  width: 100%;
  // height: 100%;

  background-color: color('light');

  @include mid-screen {
    grid-column: 2 / -2;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;

    padding: 0 $pd-m;
  }
}

.nav-closed {
  height: $nav-height;
  transition: height $transition 0.05s;
}
.nav-open {
  height: 100vh;

  @include mid-screen {
    height: $nav-height;
  }
}

.top {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  z-index: 2;

  @include grid-flow($flow: column, $gap: 0);
  justify-content: space-between;

  height: 100%;
  padding: $pd-m;

  @include mid-screen {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    justify-self: start;
  }
}

.bottom {
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: -1;
  @include grid-flow($flow: row, $gap: 0);

  height: 100%;

  @include mid-screen {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    justify-self: end;

    @include grid-flow($flow: column, $gap: 0);
  }
}

.toggle-btn {
  width: $icon-wh;
  height: $icon-wh;

  color: color('mc');
  background-color: color('light');

  border: 2px solid transparent;

  @include mid-screen {
    visibility: hidden;
  }

  &:hover,
  &:focus-visible,
  &:focus {
    color: color('accent-l');
    background-color: color('accent');
  }
}

.hide-animate {
  animation: hide-el $transition forwards;
}
.show-animate {
  animation: show-el $transition forwards;
}

@keyframes hide-el {
  to {
    transform: translateY(-250%);
  }
}

@keyframes show-el {
  from {
    transform: translateY(-250%);
  }
  to {
    transform: translateY(0%);
  }
}
</style>
