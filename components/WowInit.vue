<template>
</template>
<script>
export default {
  methods: {
    scrollMeTo(id) {
      const element = document.querySelector(id);
      const top = element?.offsetTop || 0;
      
      window.scrollTo({
        top: top - 70,
        left: 0,
        behavior: 'smooth',
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
    if (process.client) {
      new WOW().init();
    }

    const {hash} = location
    console.log(hash)
    if (hash) {
      this.scrollMeTo(hash)
    }
    if (process.client) {
      this.$nextTick().then(this.$nuxt.$emit('onLoaded'))
    }
  },
}
</script>