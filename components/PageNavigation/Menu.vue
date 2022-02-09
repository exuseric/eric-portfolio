<template>
  <ul class="menu">
    <li v-for="link in links" :key="link.ref">
      <nuxt-link :to="link.ref" class="link">
        {{ link.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PageMenu',
  data() {
    return {
      links: [
        { name: 'home', ref: '/' },
        { name: 'work', ref: '/work' },
        { name: 'about', ref: '/about' },
        { name: 'contact', ref: '/contact' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.menu {
  @include grid-flow($flow: row, $gap: 1.25rem);

  padding: $pd-m;
  height: fit-content;

  @include mid-screen {
    @include grid-flow($flow: column, $gap: 1.25rem);
    padding: 0 $pd-m;
  }
}

li {
  height: 100%;
  width: fit-content;
  list-style: none;
}

.link {
  position: relative;
  z-index: 1;

  @include grid-flow($flow: column, $gap: 0);

  font-size: scale('h1');
  font-family: family('body');
  text-decoration: none;
  line-height: 1.125;

  color: color('dark');

  width: 100%;
  height: 5rem;
  padding: $pd-m;

  transition: all $transition;

  @include mid-screen {
    justify-content: center;
    font-size: scale('body');
    padding: $pd-s;

    height: $icon-wh * 1.6;
    width: $icon-wh * 2;
  }

  &:hover,
  &:focus-visible {
    color: color('sec-d');
    transform: translateY(-0.4rem);
    outline-color: color('sec-d');

    &::before {
      width: $icon-wh;
      height: $icon-wh;
      animation: grow 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    width: 0;
    height: 0;

    border: 5px solid transparent;
    background-repeat: no-repeat;

    transition: all $transition;
  }
}

.nuxt-link-exact-active {
  color: color('sec-d');

  &::before {
    width: 100%;
    height: 100%;

    // background-color: color('sec-l');
    background-image: color('gradient');

    border-radius: 0;
  }
}

@keyframes grow {
  50% {
    width: 2.5rem;
    height: 2.5rem;
  }
  100% {
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: 0px 0px 25px 0px color('accent'), 0 0 20px 0px color('sec');
  }
}
</style>
