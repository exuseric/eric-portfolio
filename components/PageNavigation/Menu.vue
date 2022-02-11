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
  justify-content: start;

  font-size: scale('h1');

  width: 100%;
  height: 5rem;
  padding: 0 $pd-m;

  @include mid-screen {
    font-size: scale('h6');
    justify-content: center;
    padding: $pd-s;

    height: $icon-wh;
    width: calc($icon-wh * 2);
  }
}

.nuxt-link-exact-active {
  color: color('sec-l');
  background-color: color('sec');
}
</style>
