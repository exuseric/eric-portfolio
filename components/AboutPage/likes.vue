<template>
  <section
    id="interests"
    class="likes wrapper content"
    aria-label="information"
  >
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
.likes {
  padding: $section-padding-sm $spacing-md;
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

  li {
    margin: $spacing-sm 0;
  }
}
</style>
