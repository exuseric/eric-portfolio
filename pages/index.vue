<template>
  <main class="home">
    <HeroSection
      :page="$data.page"
      :query="$data.heroQuery($data.page)" />
    <FeaturedProjects />
    <!-- <IndexPageServices /> -->
    <section class="section section--services">
      <ContentWrapper
        :page="$data.page"
        :query="$data.contentQuery($data.page)" />
    </section>
    <ContactSection />
  </main>
</template>

<script>
import { heroQuery, contentQuery } from '~/graphql/queries';
export default {
  name: 'IndexPage',
  layout: 'DefaultLayout',
  data() {
    return {
      heroQuery,
      contentQuery,
      page: 'homePage',
    };
  },
};
</script>
