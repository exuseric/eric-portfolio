<template>
  <section class="outro">
    <h3>
      If you are interested in working with me, please feel free to contact me
      at
      <a href="mailto:ericmaina.gathoni@gmail.com" class="email"
        >ericmaina.gathoni@gmail.com</a
      >
    </h3>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.outro {
  @include center;

  color: color('light');
  text-align: center;

  width: 100%;
  height: 20rem;
  padding: $pd-m;

  background-color: color('dark');
}

h3 {
  font-size: scale('h6');
  font-weight: 400;
}

.email {
  color: color('accent');
  width: fit-content;

  text-decoration: none;
}
</style>
