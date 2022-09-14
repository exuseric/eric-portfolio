<template>
  <section class="contact">
    <HeroSection :hero="$data.page?.hero" />
    <ContactSection />
  </section>
</template>

<script>
import { getPage } from '~/graphql/queries';
export default {
  name: 'ContactPage',
  layout: 'DefaultLayout',
  async asyncData({ $hygraph }) {
    try {
      const { page } = await $hygraph.request(
        getPage({ slug: 'contact-page' })
      );

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
