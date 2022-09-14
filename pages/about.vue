<template>
  <main class="about">
    <HeroSection :hero="$data.page?.hero" />

    <section class="section section--content">
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
import { getPage } from '~/graphql/queries';
export default {
  name: 'AboutPage',
  layout: 'DefaultLayout',
  async asyncData({ $hygraph }) {
    try {
      const { page } = await $hygraph.request(getPage({ slug: 'about-page' }));
      return { page };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  },
  data() {
    return {
      page: {},
    };
  },
};
</script>
