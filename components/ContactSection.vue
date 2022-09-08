<template>
  <section class="section contact">
    <header class="container container--header">
      <div class="container--header__wrapper wrapper--copy">
        <h2 class="heading">
          Say hi; I'd love to hear from you
          <span role="img" aria-label="smiling face">🙂</span>
        </h2>
        <p>Available for freelance.</p>
      </div>
      <div class="container--header__wrapper">
        <ContactLinks />
      </div>
    </header>
    <div class="container container--contact">
      <ContactForm />
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

  @include text-color('secondary', '900');
  @include bg-color('secondary', '500');
  // @include bg-dark;
  overflow: hidden;

  // @include screen(tablet) {
  //   .contact__container {
  //     max-width: rem(750);
  //     margin: auto;
  //     padding: $spacer-2xl;
  //     border-radius: $round-lg;
  //   }
  // }
}

.container {
  margin-block: $spacer-2xl;

  &--header {
    &__wrapper {
      margin-block: $spacer-lg;
    }
    .heading {
      @include font(h3);
    }
  }
}

.header {
  @include grid-flow-row;
  gap: $spacer-sm;
}
</style>
