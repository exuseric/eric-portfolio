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
  list-style: none;
  padding: 0;

  li {
    margin: $pd-s 0;
    padding: 0 $pd-m;

    a {
      display: block;

      font-size: scale('h2');
      font-family: family('body');

      text-align: left;
      text-transform: capitalize;

      padding: $pd-m $pd-s;
    }
  }

  @include screen('large') {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    li {
      margin: 0;
      padding: 0 $pd-s;

      a {
        font-size: scale('body');
        padding: $pd-s;
      }
    }
  }
}
.nuxt-link-exact-active {
  position: relative;
  color: primary('500');
  font-weight: 600;
}
</style>
