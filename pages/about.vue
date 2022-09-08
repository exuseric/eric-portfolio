<template>
  <main class="about">
    <HeroSection page="aboutPage" :query="$data.heroQuery($data.page)" />

    <section class="section section--content">
      <ContentWrapper
        :page="$data.page"
        :query="$data.contentQuery($data.page)"
      />
    </section>
    <ContactSection />
  </main>
</template>

<script>
import { heroQuery, contentQuery } from '~/graphql/queries'

export default {
  name: 'AboutPage',
  layout: 'DefaultLayout',

  data() {
    return {
      page: 'aboutPage',
      heroQuery,
      contentQuery,
      content: {},
    }
  },
}
</script>

<style lang="scss" scoped>
// .section--content {
//   .container {
//     margin-block: $spacer-2xl;
//   }
// }
</style>
