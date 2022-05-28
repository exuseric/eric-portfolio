<template>
  <section class="contact content">
    <header class="wrapper">
      <h2>Get in touch</h2>
    </header>

    <ContactForm />
  </section>
</template>

<script>
export default {
  name: 'IndexPageContact',
}
</script>

<style lang="scss" scoped>
.contact {
  padding: $section-padding-sm 0;
  // background-color: $primary-500;
  background: $gradient-light;

  header {
    padding: $spacing-md;

    h2 {
      font-size: scale('h1');
      font-family: $heading;
      color: $neutral-500;
    }
  }
}
</style>
