<template>
  <div class="wrapper form-wrapper">
    <form action="">
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          required
          placeholder="Enter your full name..."
        />
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input
          id="email"
          type="email"
          name="email"
          class="form-control"
          required
          placeholder="Enter your email address..."
        />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          placeholder="Say something..."
          class="form-control"
        ></textarea>
      </div>

      <div class="form-group">
        <button type="submit" class="primary-btn submit-btn">
          Send Your Message
        </button>
      </div>
    </form>

    <ul class="socials">
      <li>
        <a href="mailto:ericmaina.gathoni@gmail.com">
          <span class="icon-btn">
            <Email />
          </span>
          <span class="text">ericmaina.gathoni@gmail.com</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/exuseric/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin @exuseric"
          aria-label="connect on linkedin"
        >
          <span class="icon-btn">
            <Linkedin />
          </span>
          <span class="text">Connect on Linkedin.</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/exuseric/"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter @exuseric"
          aria-label="DM on Twitter"
        >
          <span class="icon-btn">
            <Twitter />
          </span>
          <span class="text">Message me on Twitter.</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Twitter from '~/assets/icons/bxl:twitter.svg?inline'
import Linkedin from '~/assets/icons/bxl:linkedin.svg?inline'
import Email from '~/assets/icons/email.svg?inline'
export default {
  components: { Twitter, Linkedin, Email },
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  padding: $section-padding-sm $spacing-md;
  @include flex-wrap-row;
  gap: $spacing-lg;
}

.form-wrapper form {
  padding: $spacing-md;

  width: 100%;
  max-width: rem(700);

  border-radius: 0.5rem;
}

.form-group {
  @include flex-wrap-col;
  margin: $spacing-md auto;
  label {
    font-size: scale('h6');
    font-family: $heading;
  }
  .form-control {
    width: inherit;
    padding: $spacing-md;

    color: $neutral-50;
    background-color: $neutral-50;

    border: 2px solid transparent;
    border-radius: 0.5rem;

    &:focus-within {
      outline-color: $primary-900;
    }
  }

  .submit-btn {
    width: inherit;

    padding: $spacing-md;
  }
}

.socials {
  margin: 0;
  padding: $spacing-md;

  li {
    margin: $spacing-md auto;
    list-style: none;
  }

  a {
    @include flex-wrap-row;
    align-items: center;
    gap: $spacing-md;
    text-decoration: none;

    .text {
      color: $neutral-900;
    }
  }
}
</style>
