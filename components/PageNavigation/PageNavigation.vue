<template>
  <header :class="`nav ${isMenuOpen ? 'nav-open' : 'nav-closed'}`">
    <div class="nav__child">
      <div class="top">
        <LogoLink />
        <button class="toggle-btn" @click="isMenuOpen = !isMenuOpen">
          <MenuIcon :is-menu-open="isMenuOpen" />
          <span class="sr-only">Menu</span>
        </button>
      </div>
      <div :class="`bottom ${isMenuOpen ? 'show-animate' : 'hide-animate'}`">
        <Menu
          :aria-expanded="isMenuOpen"
          :aria-hidden="isMenuOpen"
          class="bottom__menu"
          @click="isMenuOpen = !isMenuOpen"
        />
        <SocialLinks class="bottom__social" />
      </div>
    </div>
  </header>
</template>
position: sticky; top: 0; z-index: 99;
<script>
import LogoLink from '~/components/PageNavigation/LogoLink.vue'
import Menu from '~/components/PageNavigation/Menu.vue'
import MenuIcon from '~/components/Icons/MenuIcon.vue'

export default {
  components: { LogoLink, MenuIcon, Menu },
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
      const isMidScreen = window.matchMedia('(min-width: 1280px)').matches
      const isLargeScreen = window.matchMedia('(min-width: 1920px)').matches

      if (isLargeScreen || isMidScreen) {
        this.isMenuOpen = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 99;

  min-height: $nav-height;
  height: fit-content;

  background-color: transparent;

  @include mid-screen {
    background-color: $primary-50;
  }
}

.nav__child {
  @include content-grid;
  height: fit-content;

  .top {
    grid-column: 1 / -1;
    padding: $pd-m 0;

    @include mid-screen {
      grid-column: 1 / 3;
    }
  }

  .bottom {
    grid-column: 1 / -1;
    padding-bottom: $pd-m;
    background-color: $primary-50;

    box-shadow: 0.3px 0.3px 1.3px -25px hsla(340, 49%, 8%, 0.013),
      2.2px 2.2px 4.3px -25px hsla(340, 49%, 8%, 0.022),
      5.7px 5.7px 10.3px -25px hsla(340, 49%, 8%, 0.025),
      11.6px 11.6px 20.4px -25px hsla(340, 49%, 8%, 0.026),
      21.3px 21.3px 37px -25px hsla(340, 49%, 8%, 0.03),
      40px 40px 63px -25px hsla(340, 49%, 8%, 0.07);

    border: 2px solid hsla(340, 49%, 8%, 0.025);

    @include mid-screen {
      grid-column: 4 / -1;

      padding-bottom: 0;

      box-shadow: none;

      border-radius: none;
      border: none;

      height: 100%;
    }
  }
}

.top {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
}
.bottom {
  @include mid-screen {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: end;
    padding: 0 $pd-m;
  }

  &__social {
    padding: $pd-l 0;
    justify-content: center;

    @include mid-screen {
      padding: 0 0 0 $pd-m;
      justify-content: end;
    }
  }
}

.toggle-btn {
  width: $icon-wh;
  height: $icon-wh;

  color: $primary-50;
  background-color: $primary-950;

  border: 2px solid transparent;

  @include mid-screen {
    visibility: hidden;
  }

  &:hover,
  &:focus-visible,
  &:focus {
    color: $primary-950;
    background-color: $primary-50;
    border-color: currentColor;
  }
}

.nav-closed {
  height: $nav-height;
  transition: height $transition 0.5s;
}
.nav-open {
  height: fit-content;

  @include mid-screen {
    height: $nav-height;
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
