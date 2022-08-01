<template>
  <form>
    <div class="form-group">
      <label for="full-name">Full Name:</label>
      <input
        id="full-name"
        type="text"
        name="full-name"
        class="form-control"
        required
        placeholder="eg: John Jon"
        autocomplete="name given-name additional-name"
      />
    </div>
    <div class="form-group">
      <label for="email">Email Address:</label>
      <input
        id="email"
        type="email"
        name="email"
        imputmode="email"
        class="form-control"
        required
        placeholder="eg: example@gmail.com"
        autocomplete="email"
      />
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="8"
        placeholder="Hi..."
        class="form-control"
      ></textarea>
    </div>

    <div class="form-group">
      <button type="submit" class="submit-btn primary-btn">
        Send Your Message
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  width: 100%;
}

.form-group {
  @include flex-wrap-col;

  &:not(:last-child) {
    margin-bottom: $spacer-md;
  }
  label {
    font-family: $heading;
    font-weight: 600;
    font-size: scale('h6');
    color: $primary-900;
    margin-bottom: $spacer-xs;
  }

  .submit-btn {
    width: 100%;
  }
}

.details {
  @include flex-wrap-row;
  justify-content: space-between;
  // align-items: center;
}

.form-control {
  font-size: scale(h6);

  width: 100%;
  padding: $spacer-sm;

  color: $primary-900;
  background-color: $primary-50;

  border: 2px solid transparent;
  border-radius: rem(4);

  transition: all 0.35s ease;

  &::placeholder {
    color: currentColor;
  }

  &:focus {
    outline-color: $primary-50;
    color: $primary-50;
    background-color: $primary-900;

    &::placeholder {
      color: $info-900;
    }
  }
}

.submit-btn {
  font-weight: 600;

  color: $primary-50;
  background-color: $primary-900;

  &:hover {
    color: $primary-500;
    background-color: $primary-50;
  }
}
</style>
