<template>
  <div class="defaultLayout" @click="$nuxt.$emit('onLayoutClick', $event)">
    <TheHeader />
    <Nuxt />
    <TheFooter ref="contacts"/>
    <ToUp/>
    <WowInit/>
  </div>
</template>

<script>
export default {
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
      if (name === 'contacts') this.scrollMeTo(name)
    });
  },
  beforeDestroy() {
    this.$nuxt.$off('onMenuAnchorClick');
  },
}
</script>

<style lang="scss">
.defaultLayout {
  padding-top: 96px;
  @media (max-width: $tab) {
    padding-top: 80px;
  }
  @media (max-width: $mob) {
    padding-top: 53px;
  }
}
</style>
