<template>
  <div class="QRCodePage">
    <VideoPage/>
  </div>
</template>

<script>
export default {
  name: 'QRCodePage',
}
</script>


<style lang="scss">
  .QRCodePage {
    padding-top: 81px;
    padding-bottom: 80px;
    @media (max-width: $tab) {
      padding-top: 46px;
      padding-bottom: 50px;
    }
    @media (max-width: $mob) {
      padding-top: 26px;
      padding-bottom: 28px;
    }
  }
</style>