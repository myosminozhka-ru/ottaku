<template>
  <div class="defaultLayout" @click="$nuxt.$emit('onLayoutClick', $event)">
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
</script>

<style lang="scss">
.defaultLayout {
  padding-top: 96px;
  @media (max-width: $tab) {
    padding-top: 96px;
  }
  @media (max-width: $mob) {
    padding-top: 96px;
  }
}
</style>
