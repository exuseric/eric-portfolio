<template>
  <div class="container container--content">
    <div class="wrapper">
      <article
        class="wrapper--copy content"
        v-html="$md.render($props.article)"></article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: String,
      required: true,
      default: '# No Data',
    },
  },
};
</script>

<style lang="scss" scoped>
.container--content {
  margin-block: $spacer-2xl;
}
</style>
