<template>
  <div class="MainBanner">
    <div class="MainBanner__inner">
      <div class="swiper MainBanner__swiper">
        <div class="swiper-wrapper MainBanner__swiper-wrapper">
          <div class="swiper-slide MainBanner__slide">
            <img src="@/assets/ico/logo-text.jpg" alt="">
          </div>
          <div class="swiper-slide MainBanner__slide">
            <img src="@/assets/ico/logo-text.jpg" alt="">
          </div>
          <div class="swiper-slide MainBanner__slide">
            <img src="@/assets/ico/logo-text.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="MainBanner__over">
        <div class="MainBanner__contr">
          <div class="MainBanner__buttons">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="MainBanner__content">
          <div class="MainBanner__img">
            <img src="" alt="">
          </div>
          <div class="MainBanner__text"></div>
          <div class="MainBanner__text"></div>
          <div class="MainBanner__accent"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'

export default {
  mounted() {
    const MainBanner = new Swiper('.MainBanner__swiper', {
      loop: true,
      effect: 'fade',
      grabCursor: true,
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      pagination: {
        el: '.MainBanner .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 9000,
      },
      navigation: {
        nextEl: '.MainBanner .swiper-button-next',
        prevEl: '.MainBanner .swiper-button-prev',
      },
    })
  },
  
}
</script>
<style lang="">
  
</style>