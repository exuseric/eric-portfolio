<template>
  <section class="contact section">
    <div class="container">
      <div class="wrapper">
        <header class="text-container">
          <div class="text-group">
            <h2>Let's Connect</h2>
            <p>
              Hello,
              <span role="image" aria-label="waving hand">👋</span> ;reach out
              to say hi, ask a question or if you'd like to start a new project
              or collaboration; I'd love to hear from you.
              <span role="image" aria-label="smiling face">🙂</span>
            </p>
          </div>
          <ContactLinks />
        </header>

        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPageContact',
}
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  isolation: isolate;
  z-index: 1;

  padding-top: $spacer-xl;
  padding-bottom: $spacer-xl;

  background-color: $primary-500;

  header {
    color: $primary-900;
    margin-bottom: $spacer-md;

    h2 {
      font-size: scale(h3);
      font-family: $heading;
    }
  }
}

.wrapper {
  width: 100%;
  // max-width: rem(500);
  height: fit-content;

  margin: 0 auto;

  border-radius: rem(20);

  @include screen(medium) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: start;
  }
}

.text-group {
  p {
    margin: $spacer-xs 0;
  }
}

.image {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
}
</style>
