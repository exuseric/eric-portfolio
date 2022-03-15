<template>
  <section class="work" aria-label="information">
    <header>
      <h2 class="title">Some sprinkles about me</h2>
    </header>

    <ul class="list">
      <li v-for="work in works" :key="work.id">
        <p class="name">
          {{ work.name }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'AboutPageLikes',
  data() {
    return {
      works: [
        {
          id: 0,
          name: 'Cats or Dogs; can I have both with a cow and a dragon? 😉',
        },
        {
          id: 1,
          name: 'Not a coffee drinker, I prefer tea and fruit smoothies',
        },
        {
          id: 2,
          name: 'In-between the click clack on the keyboard I like to sneak in some pencil drawings.',
        },
        {
          id: 3,
          name: "I'm interested in applying motion to design and implementing it efficiently on the web in a sort of moving gallery.",
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

  @include grid-column(
    $col-count: auto-fit,
    $col-width: minmax(30rem, 1fr),
    $gap: $pd-s
  );

  li::marker {
    color: primary('500');
  }

  .name {
    font-family: family('body');
    font-size: scale('body');

    padding: $pd-s;

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
