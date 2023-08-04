<i18n src="@/lang/components/VSert.json"></i18n> 

<template>
  <div class="VSert">
    <div class="container">
      <div class="VSert__title" v-html="$t('title')"></div>
      <div class="VSert__list">
        <div class="VSert__item">
          <img src="@/assets/img/sert1.jpg" alt="" >
        </div>
        <!-- <div class="VSert__item">
          <img src="@/assets/img/sert2.jpg" alt="" >
        </div>
        <div class="VSert__item">
          <img src="@/assets/img/sert3.jpg" alt="" >
        </div> -->
      </div>
      <div class="swiper VSert__swiper wow fadeInUp">
        <div class="swiper-wrapper VSert__swiper-wrapper">
          <div class="swiper-slide VSert__slide">
              <img src="@/assets/img/sert1.jpg" alt="" >
          </div>
          <!-- <div class="swiper-slide VSert__slide">
              <img src="@/assets/img/sert2.jpg" alt="" >
          </div>
          <div class="swiper-slide VSert__slide">
              <img src="@/assets/img/sert3.jpg" alt="" >
          </div> -->
        </div>
        <div class="VSert__controller">
          <div class="swiper-button-prev"></div>
          <div class="VSert__pag">
            <div class="swiper-pagination"></div>
          </div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'

export default {
  data() {
    return {
      slider: null,
    }
  },
  mounted() {
    this.slider = new Swiper('.VSert__swiper', {
      loop: false,
      effect: 'fade',
      grabCursor: false,
      modules: [Navigation, Pagination, EffectFade],
      pagination: {
        el: '.VSert .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // autoplay: {
      //   delay: 9000,
      // },
      navigation: {
        nextEl: '.VSert .swiper-button-next',
        prevEl: '.VSert .swiper-button-prev',
      },
    })
    window.VSertSlider = this.slider
  }
}
</script>
<style lang="scss">
  .VSert {
    padding-top: 70px;
    margin-bottom: 140px;
    background-image: url('@/assets/img/grid-bg.svg');
    background-repeat: repeat-x;
    background-position: top 10px center;
    .container {
      max-width: 1564px;
    }
    &__title {
      font-family: $secondary-font-family;
      font-size: 25px;
      font-weight: 700;
      line-height: 1.1;
      padding-left: 52px;
      letter-spacing: 0.02em;
      margin-bottom: 63px;
    }
    &__list {
      display: grid;
      grid-template-columns: 66% 32.3%;
      grid-gap: 25px;
    }
    &__item {
      grid-column: 1/3;
      // &:nth-child(2) {    
      //   padding-top: 150px;
      //   grid-column: 2/3;
      //   grid-row: 1/3;
      // }
      // &:nth-child(3) {
      //   display: flex;
      //   justify-content: flex-end;
      //   img {
      //     width: 66.6%;
      //   }
      // }
    }
    &__swiper {
      display: none;
    }
    @media (max-width: $mob) {
      padding-top: 20px;
      margin-bottom: 34px;
      background-size: 750px;
      .container {
        padding: 0 15px;
      }
      &__title {
        font-size: 20px;
        padding-left: 0;
        letter-spacing: unset;
        margin-bottom: 36px;
      }
      &__list {
        display: none;
      }
      &__swiper {
        display: block;
      }
      &__slide {    
        aspect-ratio: 1/1.25;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &__controller {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .swiper-button-prev, .swiper-rtl .swiper-button-next,
        .swiper-button-next, .swiper-rtl .swiper-button-prev  {
          position: static;
          margin: 0;
        }
        .swiper-button-next,
        .swiper-button-prev {
          height: 40px;
          width: 44px;
          color: #000;
          &::after {
            font-size: 28px;
          }
        }
      }
      &__pag {
        display: flex;
        justify-content: center;
        .swiper-pagination {
          width: 100%;
          position: static;
        }
        .swiper-pagination-bullet {
          border: 1px solid $accent;
          background-color: transparent;
          margin-right: 9px;
          opacity: 1;
          width: 14px;
          height: 14px;
          margin: 0 !important;
          margin-right: 8px !important;
          &:last-child {
            margin-right: 0;
          }
          transition: background 300ms;
          &:hover {
            background-color: $accent-hover;
          }
        }
        .swiper-pagination-bullet-active {
          background-color: $accent;
        }
      }
    }
  }
</style>