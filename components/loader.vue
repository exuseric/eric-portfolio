<template>
  <div v-if="isLoading" aria-live="polite" :aria-busy="isLoading"></div>
</template>

<script>
export default {
  name: 'LoaderAnimation',
  components: {},
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
