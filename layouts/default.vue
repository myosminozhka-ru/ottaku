<template>
  <div class="defaultLayout">
    <PageLoading/>
    <TheHeader />
    <Nuxt />
    <TheFooter ref="contacts"/>
    <ToUp/>
    <WowInit/>
  </div>
</template>

<script>
export default {
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
