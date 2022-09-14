<template>
  <div
    v-if="loading"
    class="loading"
    aria-live="polite"
    :aria-busy="loading">
    <header class="loading__header">
      <h1 class="loading__header__title">loading</h1>
      <span class="icon">
        <Logo />
      </span>
    </header>
  </div>
</template>

<script>
import Logo from '~/assets/logo/logo-with-name.svg?inline';
export default {
  components: {
    Logo,
  },
  data() {
    return {
      loading: false,
    };
  },
  start() {
    this.loading = true;
  },
  finish() {
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  width: 100vw;
  height: 100vh;

  @include bg-main;
  @include center;

  &__header {
    padding: $spacer-lg;
    @include center;
    @include text-color('primary', '500');

    &__title {
      @include font('h1');
    }
  }
}
</style>
