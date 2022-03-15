<template>
  <section class="work" aria-label="Work Standards">
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
  text-align: left;

  padding: $pd-l $pd-s;
  max-width: 120ch;

  p {
    margin: $pd-s 0;
  }
}

header {
  text-align: left;
  width: 100%;
  padding: $pd-m 0;

  h2 {
    font-family: family('small cap');
    font-size: scale('h2');
    line-height: 1.25;

    color: neutral('950');
  }
}

.list {
  width: inherit;

  margin: 0;
  padding: $pd-m 0;
  list-style: none;

  @include grid-column(
    $col-count: auto-fit,
    $col-width: minmax(30rem, 1fr),
    $gap: $pd-s
  );

  .name {
    font-family: family('heading');
    font-size: scale('h6');
    color: primary('500');
    text-transform: capitalize;

    line-height: 1.125;
  }
}

.links {
  display: flex;
  flex-flow: row wrap;
  gap: $pd-m * 1.5;

  width: 100%;
  height: 15rem;

  .link {
    text-decoration: underline;
    width: 6rem;
    height: 2.5rem;

    color: primary('500');

    @include mid-screen {
      width: fit-content;
    }
  }
}
</style>
