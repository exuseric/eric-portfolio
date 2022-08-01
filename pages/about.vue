<template>
  <section class="about">
    <!-- <AboutPageHeader />
     -->
    <PageHeader
      title="About Eric"
      illustration="undraw_personal_file_re_5joy.svg"
    />
    <main class="section">
      <AboutPageIntro />
      <AboutPageWork />
    </main>
    <Contact />
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'DefaultLayout',
}
</script>

<style lang="scss" scoped></style>
