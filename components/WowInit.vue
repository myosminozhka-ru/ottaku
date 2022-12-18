<template>
</template>
<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
    if (process.client) {
      new WOW().init();
    }
  },
}
</script>