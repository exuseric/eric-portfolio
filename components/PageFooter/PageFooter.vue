<template>
  <footer class="footer">
    <ul class="menu" aria-label="page navigation menu">
      <li v-for="link in links" :key="link.ref">
        <nuxt-link :to="link.ref" class="link">
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
    <div class="social">
      <social-links />
    </div>
    <copyright-section />
    <built-by-section />
  </footer>
</template>

<script>
import BuiltBySection from './BuiltBySection.vue'
import CopyrightSection from './CopyrightSection.vue'
export default {
  name: 'PageFooter',
  components: { CopyrightSection, BuiltBySection },
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
.footer {
  $h: 40rem;
  $count: 4;

  grid-column: 1 / -1;

  @include grid(
    $col-width: 1fr,
    $col-count: 8,
    $row-height: 2fr,
    $row-count: $count,
    $col-gap: 0,
    $row-gap: $pd-m
  );

  justify-content: center;
  align-items: center;

  width: 100%;
  height: $h;
  padding: $pd-l 0;

  background-color: color('light');

  & > * {
    grid-column: 1 / -1;

    padding: 0 $pd-m;
    margin-inline: max(0px, 50% - 800px / 2);
  }

  @include mid-screen {
    grid-column: 2 / -2;
  }
}

.copyright {
  grid-row: -2 / -1;
}

.social {
  grid-row: 2 / span 1;
  justify-self: start;
}

.built {
  grid-row: 3 / span 1;
}

.menu {
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
  grid-auto-rows: 2.5rem;
  grid-auto-flow: dense;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-evenly;

  list-style-type: none;
}

.link {
  height: $icon-wh;
}
</style>
