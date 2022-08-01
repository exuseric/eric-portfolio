<template>
  <header class="hero section">
    <div class="container">
      <div class="heading">
        <h1>Eric Maina</h1>

        <div class="text-group">
          <p>Front-end Developer.</p>
          <p>Designer.</p>
          <p>Ailurophile.</p>
          <p>Tea Cup.</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AboutPageHeader',
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  isolation: isolate;
}
.container {
  @include center;
  height: rem(350);
}

.text-group {
  @include flex-wrap-row;
  justify-content: center;
  gap: $spacer-xs;
}

.heading {
  text-align: center;
  padding: $spacer-md;

  height: fit-content;
  color: $light-gray;

  @include light-theme {
    color: $dark-gray;
  }

  h1 {
    font-size: scale(h1);
    font-family: $heading;
    line-height: rem(56);
  }
  p {
    font-size: scale(h6);
    font-family: $body;
    font-weight: 100;
  }
}
</style>
