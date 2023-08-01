<i18n src="@/lang/components/VideoPage.json"></i18n> 

<template>
  <div class="VideoPage">
    <div class="container">
      <div class="VideoPage__titles">
        <div class="VideoPage__title" v-html="$t('text1')"></div>
        <div v-if="$t('text2') !== 'text2'" class="VideoPage__title" v-html="$t('text2')"></div>
      </div>
    </div>
    <div class="VideoPage__video">
      <div class="container">
        <video src="/video/video1.mp4" controls="true" autoplay></video>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
  .VideoPage {
    &__video {
      background-image: url('@/assets/img/grid-bg.svg');
      background-repeat: repeat-x;
      background-position: top 0px center;
      video {
        width: 100%;
      }
    }
    .container {
      max-width: 1564px;
    }
    &__titles {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 24px;
      margin-bottom: 63px;
    }
    &__title {
      font-family: $secondary-font-family;
      font-size: 25px;
      font-weight: 700;
      line-height: 1.1;
      padding-left: 52px;
      letter-spacing: 0.02em;
    }
    @media (max-width: $tab) {
      background-image: url('@/assets/img/grid-bg.svg');
      background-repeat: repeat-x;
      background-position: top 0px center;
      background-size: 700px;
      .container {
        padding: 0 16px;
      }
      &__video {
        background: none;
        video {
          width: 100%;
        }
      }
      &__titles {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 24px;
        margin-bottom: 14px;
      }
      &__title {
        font-size: 20px;
        padding-left: 0;
        letter-spacing: 0.04em;
      }
    }
    @media (max-width: $mob) {
      &__video {
        video {
          aspect-ratio: 10/12.5;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
</style>