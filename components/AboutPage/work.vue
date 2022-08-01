<template>
  <section class="container" aria-label="standards">
    <header class="tex-container--heading">
      <h2 class="title">Standards I strive to have in my work.</h2>
    </header>

    <ul class="list text-container">
      <li v-for="work in works" :key="work.id">
        <p class="name">
          {{ work.name }}
        </p>
        <p class="detail">
          {{ work.detail }}
        </p>
      </li>
    </ul>

    <!-- <div class="content-wrapper">
      <header class="tex-container--heading">
        <h2 class="title">Some sprinkles about me</h2>
      </header>

      <ul class="list text-container">
        <li v-for="work in works" :key="work.id">
          <p class="name">
            {{ work.name }}
          </p>
        </li>
      </ul>
    </div> -->
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
      likes: [
        {
          id: 0,
          name: 'Cats or Dogs? Can I have both with a cow and a pegasus unicorn? 😉',
        },
        {
          id: 1,
          name: 'More Chai than Chai Latte',
        },
        {
          id: 2,
          name: 'In-between the click clack on the keyboard I like to sneak in some pencil drawings.',
        },
        {
          id: 3,
          name: "I'm interested in applying motion to design (motion design) and implementing it efficiently on the web.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
header > h2 {
  font-size: scale('h3');
  line-height: rem(32);
  font-family: $heading;

  color: $light-gray;

  padding: $spacer-sm 0;

  @include light-theme {
    color: $dark-gray;
  }
}

.list {
  margin: 0;
  list-style: none;
  padding: $spacer-xs 0;

  .name {
    font-family: $heading;
    font-size: scale('h5');
    color: $light-gray;

    text-transform: capitalize;
    @include light-theme {
      color: $dark-gray;
    }
  }
  li {
    margin: $spacer-sm 0;
  }
}
</style>
