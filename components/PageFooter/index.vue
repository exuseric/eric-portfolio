<template>
  <footer>
    <div class="wrapper">
      <PageFooterMenu />
      <div class="copyright">
        <PageNavigationLogoLink />
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
footer {
  padding: $section-padding-sm 0;
}

.wrapper {
  @include flex-wrap-row;
  justify-content: space-between;
  padding: 0 $spacing-md;
}
</style>
