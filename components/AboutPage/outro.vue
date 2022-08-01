<template>
  <section class="outro content" aria-label="contact information">
    <header>
      <h2 class="title">Get in touch with me</h2>
    </header>
    <ContactForm />
  </section>
</template>

<script>
export default {
  name: 'AboutPageOutro',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.outro {
  margin-top: $spacer-lg;
  background-color: $black;
}

header > h2 {
  font-size: scale('h3');
  font-family: $heading;

  color: $primary-500;

  padding: $spacer-sm $spacer-md;
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
    margin: $spacer-sm 0;
  }
}
</style>
