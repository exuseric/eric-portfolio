<template>
  <header>
    <div class="wrapper">
      <h1>Eric Maina &mdash; Front-end Developer</h1>
      <h2>I build resilient and inclusive user interfaces for the web</h2>

      <div class="action-btns">
        <button class="primary-btn work-btn">Let's Work Together</button>
        <button class="sec-btn view-btn">Browse My Work</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'IndexPageHeader',
}
</script>

<style lang="scss" scoped>
header {
  @include center;

  height: 50rem;
  text-align: left;
  padding: 0 $spacing-sm;

  @include screen(medium) {
    height: 40rem;
    text-align: center;
  }

  @include screen(large) {
    height: 60rem;
  }
}

h1 {
  font-size: scale('h5');
  font-weight: 400;
}
h2 {
  font-size: scale('h2');
  font-family: $heading;
  color: $primary-500;

  @include screen(medium) {
    font-size: scale('h1');
  }
}

.wrapper {
  @include center;
  gap: $spacing-md;

  @include screen(large) {
    padding: $spacing-md;
  }
}

.action-btns {
  @include flex-wrap-row;
  justify-content: flex-start;
  gap: $spacing-md;

  padding: $spacing-md 0;

  @include screen(medium) {
    justify-content: center;
  }
}
</style>
