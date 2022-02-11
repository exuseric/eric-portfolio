<template>
  <section class="home page-wrapper">
    <HeroHeader />
    <div class="section">
      <ProjectSection />
    </div>
    <OutroSection />
  </section>
</template>

<script>
import HeroHeader from '~/components/IndexPage/HeroHeader.vue'
import OutroSection from '~/components/IndexPage/OutroSection.vue'
import ProjectSection from '~/components/IndexPage/ProjectSection.vue'
export default {
  name: 'IndexPage',
  components: {
    HeroHeader,
    OutroSection,
    ProjectSection,
  },
  layout: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
.section {
  padding: $section-padding 0;
}
</style>
