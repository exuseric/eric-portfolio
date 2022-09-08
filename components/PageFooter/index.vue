<template>
  <footer class="section footer">
    <div class="container container--grid">
      <PageFooterMenu />
      <div class="copyright wrapper--copy">
        <LogoLink />
        <p>
          Copyright &copy; Eric Maina {{ new Date().getFullYear() }}. All Rights
          Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: $spacer-2xl;
  padding-block: $spacer-xl;
}
.container--grid {
  @include grid-flow-row;
  gap: $spacer-2xl;
}
.copyright {
  @include flex;
  align-items: center;
  gap: $spacer-md;
}
</style>
