<template>
  <div class="outro">
    <h3>
      If you are interested in working with me, please feel free to contact me
      at
      <a href="mailto:ericmaina.gathoni@gmail.com" class="link"
        >ericmaina.gathoni@gmail.com</a
      >
    </h3>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.outro {
  position: relative;
  z-index: 1;
  @include center;

  width: 100%;
  height: 20rem;
  padding: $pd-m;

  border: 5px solid color('accent-l');
}

p {
  @include center;

  font-size: scale('h6');
  text-align: center;

  color: color('dark');

  border-radius: 0.625rem;
}

.link {
  @include center;
  width: 100%;
  height: $box-btn-h;

  padding: $pd-s;

  color: color('accent');

  text-decoration: none;
}
</style>
