<template>
  <main class="about">
    <HeroSection
      page="aboutPage"
      :query="$data.heroQuery($data.page)" />

    <section class="section section--content">
      <ContentWrapper
        v-for="(article, idx) in $data.content"
        :key="idx"
        :article="article" />
    </section>
    <ContactSection />
  </main>
</template>

<script>
import { heroQuery, aboutContent as contentQuery } from '~/graphql/queries';
import { useContent } from '~/lib/strapiData';

export default {
  name: 'AboutPage',
  layout: 'DefaultLayout',

  data() {
    return {
      page: 'aboutPage',
      heroQuery,
      content: '',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const articles = ['Bio', 'Information', 'Skills'];
      const data = await this.$strapi.graphql({
        query: contentQuery(),
      });
      this.content = useContent({
        sectionsArray: articles,
        type: this.page,
        data,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// .section--content {
//   .container {
//     margin-block: $spacer-2xl;
//   }
// }
</style>
