<template>
  <main class="home">
    <HeroSection :hero="$data.page?.hero" />

    <FeaturedProjects :projects="$data.projects" />

    <section class="section section--services">
      <ContentWrapper
        v-for="article in $data.page?.content"
        :key="article.id"
        :title="article.title"
        :article="article.content.markdown" />
    </section>

    <ContactSection />
  </main>
</template>

<script>
import { getPage, getProjects } from '~/graphql/queries';
export default {
  name: 'MainHomepage',
  layout: 'DefaultLayout',
  async asyncData({ $hygraph }) {
    try {
      const { page } = await $hygraph.request(getPage({ slug: 'homepage' }));
      const { projects } = await $hygraph.request(getProjects());
      return { page, projects };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  },
  data() {
    return {
      page: {},
      projects: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {},
  },
};
</script>
