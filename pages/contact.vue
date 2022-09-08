<template>
  <section class="contact">
    <HeroSection :page="$data.page" :query="$data.heroQuery($data.page)" />
    <ContactSection />
  </section>
</template>

<script>
import { heroQuery } from '~/graphql/queries'
export default {
  name: 'ContactPage',
  layout: 'DefaultLayout',
  data() {
    return {
      page: 'contactPage',
      heroQuery,
    }
  },
}
</script>
