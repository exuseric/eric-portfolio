<template>
  <div ref="layout" class="default-layout">
    <!-- <PageNavigation /> -->

    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridTemplate: '',
      deviceWidth: '',
    }
  },
  beforeMount() {
    this.getDeviceWidth()
  },
  mounted() {
    this.setLayoutGrid()
  },
  methods: {
    getDeviceWidth() {
      this.deviceWidth = window.innerWidth
    },
    setLayoutGrid() {
      const columnCount = 12
      const columnWidth = this.deviceWidth / columnCount / 16

      const gridTemplate = `repeat(${columnCount}, ${columnWidth}rem)`
      // this.gridTemplate = gridTemplate
      this.$refs.layout.style.display = 'grid'
      this.$refs.layout.style.gridTemplateColumns = gridTemplate
    },
    resetGrid() {
      this.getDeviceWidth()
      this.setLayoutGrid()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  grid-column: 1 / -1;
  @include large-screen {
    grid-column: 2 / -2;
  }
}
</style>
