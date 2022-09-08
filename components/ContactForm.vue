<template>
  <form
    id="contact"
    class="form form--grid"
    name="contact"
    netlify>
    <input
      type="hidden"
      name="contact" />
    <div class="form--grid__row form--grid__details">
      <div class="form__group form__group--name">
        <label
          class="form__label"
          for="full-name"
          >Name:</label
        >
        <input
          id="full-name"
          type="text"
          name="full-name"
          class="form__control"
          required
          placeholder="eg: John Jon"
          autocomplete="name given-name additional-name" />
      </div>
      <div class="form__group form__group--email">
        <label
          class="form__label"
          for="email"
          >Email:</label
        >
        <input
          id="email"
          type="email"
          name="email"
          imputmode="email"
          class="form__control"
          required
          placeholder="eg: example@gmail.com"
          autocomplete="email" />
      </div>
    </div>
    <div class="form--grid__row form--grid__message">
      <div class="form__group form__group--message">
        <label
          class="form__label"
          for="message"
          >Message:</label
        >
        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder="Hi..."
          class="form__control"></textarea>
      </div>
    </div>
    <div class="form--grid__row form--grid__action">
      <div class="form__group form__group--button">
        <button
          type="submit"
          class="button button--submit button--main">
          Send Message
        </button>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: rem(750);

  &__group {
    @include grid-flow-row;
    gap: $spacer-xs;
  }

  &__label {
    @include text-color('secondary', '900');
    @include font(h6);
    font-weight: 600;
  }

  &__control {
    @include font('body-lg');
    font-weight: 600;
    width: 100%;
    padding: $spacer-md;
    border: 2px solid transparent;
    border-radius: $round-sm;

    @include text-color('secondary', '900');
    @include bg-color('secondary', '50');

    &::placeholder {
      color: currentColor;
    }

    &:focus {
      @include text-color('info', '500');
      border-color: currentColor;
      @include bg-color('info', '50');
    }
  }
}

.form--grid {
  @include grid-flow-row;
  gap: $spacer-md;
  &__row {
    @include grid-flow-row;
    gap: $spacer-md;
  }

  @include screen(tablet) {
    &__details {
      @include grid-flow-col;
    }
  }
}
</style>
