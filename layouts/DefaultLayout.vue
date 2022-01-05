<template>
  <div :class="`default-layout ${defaultDisplayMode}`">
    <PageNavigation />
    <div class="grid-layout">
      <div class="container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultDisplayMode: 'dm',
    }
  },
  beforeMount() {
    this.setDisplayModeInLocalStorage()
  },
  methods: {
    setDisplayModeInLocalStorage() {
      if (localStorage.getItem('displayMode') === null) {
        localStorage.setItem(
          'displayMode',
          JSON.stringify(this.defaultDisplayMode)
        )
      }
    },
  },
}
</script>
