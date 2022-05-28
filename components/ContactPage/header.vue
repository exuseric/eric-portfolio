<template>
  <header class="header">
    <div class="wrapper">
      <h1>Work Inquiry, Curious Visitor or Just To Say Hi!</h1>
      <p>Leave a message.</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ContactPageHeader',
}
</script>

<style lang="scss" scoped>
header {
  @include center;
  height: 100vh;

  .wrapper {
    @include center;
    height: 40rem;
    padding: 0 $spacing-md;

    background-image: url('~assets/img/illustration/sticking tongue out.png');
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: rem(250);
    h1 {
      font-size: scale('h1');
      font-family: $heading;
      font-weight: 400;
      color: $primary-500;
    }

    p {
      font-size: scale('h3');
      font-weight: 900;
      margin: auto;

      text-transform: uppercase;
    }
  }
}
</style>
