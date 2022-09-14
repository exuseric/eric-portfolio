<template>
  <div class="container container--content">
    <div class="wrapper">
      <article class="wrapper--copy content">
        <h2 class="content__title">
          {{ $props.title }}
        </h2>
        <div
          class="content__article"
          v-html="$md.render($props.article)"></div>
      </article>
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
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container--content {
  margin-block: $spacer-xl;
}

.content__title {
  margin-bottom: $spacer-lg;
  padding: 0;
}
</style>
