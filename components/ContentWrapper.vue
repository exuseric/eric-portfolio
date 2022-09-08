<template>
  <div class="container container--content">
    <div class="wrapper">
      <article
        class="wrapper--copy content"
        v-html="$md.render($data.content)"></article>
    </div>
  </div>
</template>

<script>
import { getContent } from '~/lib/strapiData';

export default {
  props: {
    page: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      content: '',
    };
  },
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await this.$strapi.graphql({
        query: this.$props.query,
      });
      this.content = getContent({ page: this.$props.page, data });
    },
  },
};
</script>
