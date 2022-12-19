<template>
  <div class="IndexPage">
    <MainBanner ref="about_us"/>
    <ProdSlider ref="products"/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    scrollMeTo(refName) {
      const element = this.$refs[refName].$el;
      const top = element.offsetTop;
      
      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth',
      })
    }
  },
  mounted() {
    this.$nuxt.$on('onMenuAnchorClick', (name) => {
      if (name === 'about_us' || name === 'products') this.scrollMeTo(name)
    });
  },
  beforeDestroy() {
    this.$nuxt.$off('onMenuAnchorClick');
  },
}
</script>
