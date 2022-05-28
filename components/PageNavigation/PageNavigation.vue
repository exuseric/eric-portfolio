<template>
  <header :class="`nav ${isMenuOpen ? 'nav-open' : 'nav-closed'}`">
    <div class="nav__child wrapper">
      <div class="top">
        <LogoLink />
        <button
          class="icon-btn"
          type="button"
          aria-label="menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <MenuIcon v-if="!isMenuOpen" />
          <CloseIcon v-if="isMenuOpen" />
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
<script>
import LogoLink from '~/components/PageNavigation/LogoLink.vue'
import Menu from '~/components/PageNavigation/Menu.vue'
import MenuIcon from '~/assets/icons/menu.svg?inline'
import CloseIcon from '~/assets/icons/close.svg?inline'

export default {
  components: { LogoLink, MenuIcon, CloseIcon, Menu },
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 99;

  width: 100%;
  height: $nav-height;
  padding: 0 $spacing-md;

  background-color: $neutral-50;
}

.nav__child {
  height: inherit;
  @include flex-wrap-row;

  .top {
    align-self: center;
  }

  @include screen(medium) {
    @include grid-flow-col;
  }
}

.top {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  // padding: $spacing-md 0;
}

.bottom {
  position: absolute;
  top: $nav-height;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
  height: fit-content;

  padding: 0 0 $spacing-md 0;
  background-color: $neutral-50;

  box-shadow: 0.3px 0.3px 1.3px -25px hsla(340, 49%, 8%, 0.013),
    2.2px 2.2px 4.3px -25px hsla(340, 49%, 8%, 0.022),
    5.7px 5.7px 10.3px -25px hsla(340, 49%, 8%, 0.025),
    11.6px 11.6px 20.4px -25px hsla(340, 49%, 8%, 0.026),
    21.3px 21.3px 37px -25px hsla(340, 49%, 8%, 0.03),
    40px 40px 63px -25px hsla(340, 49%, 8%, 0.07);

  @include screen(medium) {
    position: relative;
    inset: 0 0 auto;

    width: fit-content;
    // height: 100%;
    height: $nav-height;

    justify-self: end;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0;

    box-shadow: none;
    background-color: transparent;
  }
}

.bottom__social {
  padding: $spacing-lg 0;
  margin: auto;

  @include screen(medium) {
    padding: 0 0 0 $spacing-md;
    margin: 0 0;
  }
}

.icon-btn {
  @include screen(medium) {
    visibility: hidden;
  }
}

.nav-closed {
  height: $nav-height;
  transition: height $transition 0.5s;

  @include screen(medium) {
    height: fit-content;
  }
}
.nav-open {
  height: $nav-height;

  @include screen(medium) {
    height: $nav-height;
  }
}

.hide-animate {
  animation: hide-el $transition forwards;

  @include screen(medium) {
    animation: show-el $transition forwards;
  }
}
.show-animate {
  animation: show-el $transition forwards;
}

@keyframes hide-el {
  to {
    transform: translateY(-650%);
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
