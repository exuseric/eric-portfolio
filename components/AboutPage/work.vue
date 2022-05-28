<template>
  <section id="skills" class="work wrapper" aria-label="Work Standards">
    <header>
      <h2 class="title">My work is by default focused on the following</h2>
    </header>

    <ul class="list">
      <li v-for="work in works" :key="work.id">
        <p class="name">
          {{ work.name }}
        </p>
        <p class="detail">
          {{ work.detail }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'AboutPageWork',
  data() {
    return {
      works: [
        {
          id: 0,
          name: 'responsive design',
          detail:
            'Tested to be usable and informative across devices and browsers',
        },
        {
          id: 1,
          name: 'cross-browser compatibility',
          detail: 'Works across multiple modern browsers.',
        },
        {
          id: 2,
          name: 'optimized performance',
          detail: 'Lightweight and fast experience.',
        },
        {
          id: 3,
          name: 'accessible design',
          detail: 'Usable by users of assistive technologies.',
        },
        {
          id: 4,
          name: 'modern practices',
          detail:
            'Uses the latest in the front-end field with appropriate fallbacks.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.work {
  padding: 0 $spacing-md;
}

header > h2 {
  font-size: scale('h3');
  font-family: $heading;

  color: $neutral-500;

  padding: $spacing-sm 0;
}

.list {
  padding: 0;
  margin: 0;
  list-style: none;

  .name {
    font-family: $heading;
    font-size: scale('h6');
    color: $primary-500;

    text-transform: capitalize;
  }
  li {
    margin: $spacing-sm 0;
  }
}
</style>
