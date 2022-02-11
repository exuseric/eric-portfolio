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
        { name: 'blog', ref: '/blog' },
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
  width: 100%;
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
  padding: 0 $pd-m;

  transition: transform $transition;

  @include mid-screen {
    justify-content: center;
    font-size: scale('body');
    padding: $pd-s;

    height: $icon-wh;
    width: calc($icon-wh * 2);
  }
}

.nuxt-link-exact-active {
  color: color('sec-l');
  background-color: color('sec');
}

.link:hover,
.link:focus-visible {
  color: color('accent-l');
  background-color: color('accent');
  outline-color: color('accent-d');

  transform: translateY(-0.4rem);
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
