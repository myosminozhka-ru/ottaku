<template>
  <div v-show="isShow" class="PageLoading">
    loading ...
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true
    }
  },
  mounted() {
    this.$nuxt.$on('onLoaded', () => {
      this.isShow = false
    });
  },
}
</script>
<style lang="scss">
  .PageLoading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    z-index: 1000;
  }
</style>