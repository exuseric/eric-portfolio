<template>
  <footer class="section">
    <div class="container">
      <PageFooterMenu />
      <div class="copyright">
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
}
</script>

<style lang="scss" scoped>
.copyright {
  margin-top: $spacer-lg;
}
</style>
