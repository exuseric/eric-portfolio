<template>
  <header class="hero">
    <div class="heading">
      <div class="head">
        <h1 class="name">ERIC MAINA</h1>
        <h2 class="title">FRONTEND DEVELOPER</h2>
      </div>
      <p>
        I build resilient and inclusive user interfaces utilizing foundational
        Web standards.
      </p>
    </div>

    <button class="contact-btn">Let's Talk</button>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  $row-height: 4rem;
  $column-width: 1fr;
  $row-count: 12;
  $column-count: 6;

  z-index: 1;

  width: 100%;
  height: calc($row-height * $row-count);

  display: grid;
  grid-template-columns: repeat($column-count, $column-width);
  grid-template-rows: repeat($row-count, $row-height);
  background-color: color('pry-bg');
}

.heading {
  grid-column: 2 / -2;
  grid-row: 4 / -4;
  // z-index: 2;

  // background: color('sec-bg');
  @include grid-row($gap: 0.625rem);

  .head {
    text-align: right;
  }

  h1 {
    font-family: family('heading');
    font-size: scale('h1');
    color: color('light-txt');

    line-height: 1.125;
  }
  h2 {
    font-size: scale('h5');
    color: color('dark-txt');

    line-height: 1.25;
  }

  p {
    font-size: scale('h5');
    color: color('dark-txt');

    line-height: 1.5;
    padding: 0.625rem;
  }
}

.contact-btn {
  grid-column: 2 / -2;
  grid-row: -3 / -2;
  @include center;

  width: 300px;
  height: 4rem;

  font-family: family('body');
  font-size: scale('h5');
  font-weight: 600;
  line-height: 1;

  color: color('pry-d');
  background-color: color('light-bg');

  border: 2px solid transparent;
  border-radius: 30px;
}
</style>
