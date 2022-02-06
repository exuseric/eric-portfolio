<template>
  <div class="outro">
    <p>
      If you are interested in working with me, please feel free to contact me
      at
      <a href="mailto:ericmaina.gathoni@gmail.com" class="link"
        >ericmaina.gathoni@gmail.com</a
      >
    </p>

    <!-- <div class="img"></div> -->
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

  background: color('light-gradient');
}

.img {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: -1;

  width: 100%;
  height: inherit;

  transform: rotateZ(5deg) translateY(-50%);

  background-image: url('~/assets/img/walkie-talkie.svg');
  background-position: left;
  background-size: 60%;
  background-repeat: no-repeat;
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
