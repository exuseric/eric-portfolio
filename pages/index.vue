<template>
  <main class="home">
    <HeroSection
      :page="$data.page"
      :query="$data.heroQuery($data.page)" />
    <FeaturedProjects />
    <!-- <IndexPageServices /> -->
    <section class="section section--services">
      <ContentWrapper
        v-for="(article, idx) in $data.content"
        :key="idx"
        :article="article" />
    </section>
    <ContactSection />
  </main>
</template>

<script>
import { heroQuery, homeContent as contentQuery } from '~/graphql/queries';
import { useContent } from '~/lib/strapiData';
export default {
  name: 'IndexPage',
  layout: 'DefaultLayout',
  data() {
    return {
      content: '',
      heroQuery,
      page: 'homePage',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const articles = ['Services', 'Standards'];
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
