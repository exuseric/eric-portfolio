<template>
  <ul class="menu">
    <li v-for="link in links" :key="link.ref">
      <nuxt-link :to="link.ref" class="menu-link">{{ link.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'home', ref: '/' },
        { name: 'my work', ref: '/work' },
        { name: 'about me', ref: '/about' },
        { name: 'contact', ref: '/contact' },
      ],
    }
  },
}
</script>

<style scoped>
.menu {
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  width: 100%;

  list-style: none;
}

.menu-link {
  display: grid;
  place-content: center;

  text-decoration: none;
  text-transform: capitalize;

  width: var(--box-btn-w);
  height: var(--box-btn-h);

  background: yellow;
}
</style>
