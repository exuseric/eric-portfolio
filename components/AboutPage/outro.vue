<template>
  <section class="outro wrapper" aria-label="contact information">
    <header>
      <h2 class="title">Get in touch with me</h2>
    </header>
    <!--
    <ul class="list">
      <li>
        <nuxt-link to="/contact" class="list__link"
          >Fill out the contact form.</nuxt-link
        >
      </li>
      <li>
        <a href="mailto:ericmaina.gathoni@gmail.com" class="list__link"
          >Write me an email: ericmaina.gathoni@gmail.com</a
        >
      </li>
      <li>
        <a
          href="https://twitter.com/exuseric"
          target="_blank"
          rel="noopener noreferrer"
          class="list__link"
        >
          DM Me on Twitter. @exuseric
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/exuseric"
          target="_blank"
          rel="noopener noreferrer"
          class="list__link"
        >
          Connect with me on LinkedIn.
        </a>
      </li>
      <li>
        <a
          href="https://www.githu.com/exuseric"
          target="_blank"
          rel="noopener noreferrer"
          class="list__link"
        >
          Check my projects on github.
        </a>
      </li>
    </ul> -->

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
header > h2 {
  font-size: scale('h3');
  font-family: $heading;

  color: $neutral-500;

  padding: $spacing-sm $spacing-md;
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
