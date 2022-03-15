<template>
  <section class="outro content" aria-label="contact information">
    <header>
      <h2 class="title">get in touch with me; browse my work.</h2>
    </header>

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
    </ul>
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
    font-size: scale('h1');
    font-weight: 600;
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

  li {
    padding: $pd-m $pd-s;
  }

  &__link {
    text-decoration: underline;
    text-decoration-style: dotted;

    color: primary('500');

    @include mid-screen {
      width: fit-content;
    }
  }
}
</style>
