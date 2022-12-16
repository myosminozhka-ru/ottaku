<i18n src="@/lang/components/ProdSlider.json"></i18n> 

<template>
  <div class="ProdSlider">
    <div class="ProdSlider__inner">
      <div class="ProdSlider__mtitle">
        <div class="container">OTTAKU  5 in 1 EFFECT</div>
      </div>
      <div class="swiper ProdSlider__swiper">
        <div class="swiper-wrapper ProdSlider__swiper-wrapper">
          <div 
            v-for="(slide, index) in slides"
            :key="index"
            class="swiper-slide ProdSlider__slide"
          >
            <div class="ProdSlider__img">
              <img :src="slide.path" alt="" class="desk"/>
              <img :src="slide.path2" alt="" class="mob"/>
            </div>
            <button class="ProdSlider__button" @click="slide.isOpen = true">
              <img src="@/assets/ico/search.svg" alt="">
              More
            </button>
            <div class="ProdSlider__modal" :class="{isOpen: slide.isOpen}">
              <button class="ProdSlider__modal-close" @click="slide.isOpen = false">
                <img src="@/assets/ico/ClearCancel.svg" alt="">
              </button>
              <div v-html="slide.left" class="ProdSlider__modal-left"></div>
              <div v-html="slide.right" class="ProdSlider__modal-right"></div>
            </div>
          </div>
          <!-- <div class="swiper-slide ProdSlider__slide">
            <div class="ProdSlider__img">
              <img src="@/assets/img/prod1.png" alt="" class="desk"/>
              <img src="@/assets/img/prod-tab1.png" alt="" class="mob"/>
            </div>
            <button class="ProdSlider__button">
              <img src="@/assets/ico/search.svg" alt="">
              More
            </button>
            <div class="ProdSlider__modal">
              <button class="ProdSlider__modal-close"><img src="@/assets/ico/ClearCancel.svg" alt=""></button>
              <div class="ProdSlider__modal-left">
                5in1: Remove stains, remove unpleasant odors from clothes, prevent fabric damage, preserve color, universal 
                <br><br>
                Products for the whole family. 0+. Hypoallergenic 
              </div>
              <div class="ProdSlider__modal-right">
                
              </div>
            </div>
          </div> -->
          <!-- <div class="swiper-slide ProdSlider__slide">
            <div class="ProdSlider__img">
              <img src="@/assets/img/prod2.png" alt="" class="desk"/>
              <img src="@/assets/img/prod-tab2.png" alt="" class="mob"/>
            </div>
            <button class="ProdSlider__button">
              <img src="@/assets/ico/search.svg" alt="">
              More
            </button>
          </div> -->
        </div>
        <div class="ProdSlider__pag">
          <div class="swiper-pagination"></div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'

export default {
  data() {
    return {
      slides: [
        { 
          id: 1,
          value: "img",
          isOpen: false,
          path: require("@/assets/img/prod1.png"),
          path2: require("@/assets/img/prod-tab1.png"),
          left: this.$t('slides[0].left'),
          right: this.$t('slides[0].right')
        },
        {
          id: 2,
          value: "img",
          isOpen: false,
          path: require("@/assets/img/prod2.png"),
          path2: require("@/assets/img/prod-tab2.png"),
          left: this.$t('slides[1].left'),
          right: this.$t('slides[1].right')
        },
      ]
    }
  },
  mounted() {
    const ProdSlider = new Swiper('.ProdSlider__swiper', {
      loop: true,
      effect: 'fade',
      grabCursor: true,
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      pagination: {
        el: '.ProdSlider .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // autoplay: {
      //   delay: 9000,
      // },
      navigation: {
        nextEl: '.ProdSlider .swiper-button-next',
        prevEl: '.ProdSlider .swiper-button-prev',
      },
    })
  },
}
</script>
<style lang="scss">
  .ProdSlider {
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    padding-top: 36px;
    padding-bottom: 47px;
    &__mtitle {
      position: absolute;
      top: 62px;
      width: 100%;
      z-index: 10;
      font-family: 'Vela Sans';
      font-weight: 700;
      font-size: 26px;
      line-height: 120.02%;
      padding-left: 98px;
    }
    &__slide {
      position: relative;
    }
    &__img {
      height: 635px;
      background-color: #fff;
      .mob {
        display: none;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__button {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      padding-right: 30px;
      background-color: $accent;
      color: $light-text;
      z-index: 10;
      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        margin-right: 10px;
      }
    }
    &__modal {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-250%);
      z-index: 20;
      max-width: 610px;
      width: 100%;
      padding: 20px;
      background-color: $light-bg;
      color: $dark-text;
      display: flex;
      justify-content: space-between;
      box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25), 35px 275px 111px rgba(0, 0, 0, 0.01), 19px 155px 94px rgba(0, 0, 0, 0.05), 9px 69px 69px rgba(0, 0, 0, 0.09);
      &.isOpen {
        transform: translateX(-50%);
      }
    }
    &__modal-close {
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 20;
    }
    &__modal-left {
      font-size: 16px;
      line-height: 125.5%;
      max-width: 237px;
      padding-left: 13px;
      border-left: 1px solid $accent;
    }
    &__modal-right {
      max-width: 300px;
      p {
        font-weight: 500;
        font-size: 20px;
        line-height: 125.5%;
        margin-bottom: 15px;
      }
      table {
        padding: 15px 10px;
        background: linear-gradient(154.22deg, #84CDB3 16.29%, rgba(132, 205, 179, 0.3) 144.79%);
        td:first-child {
          text-align: right;
          font-family: 'Vela Sans';
          font-weight: 700;
          font-size: 15px;
          line-height: 125.5%;
          color: $light-text;
          white-space: nowrap;
          padding-right: 5px;
          padding-bottom: 5px;
        }
        td:last-child {
          font-size: 12px;
          color: $dark-text;
          padding-bottom: 5px;
        }
      }
    }
    &__pag {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .swiper-pagination {
        width: 100%;
        position: static;
      }
      .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        border: 1px solid #fff;
        background-color: transparent;
        margin-right: 9px;
        opacity: 1;
        &:last-child {
          margin-right: 0;
        }
      }
      .swiper-pagination-bullet-active {
        background-color: #fff;
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      height: 60px;
      width: 30px;
      color: #000;
      &::after {
        font-size: 64px;
      }
    }
    .swiper-button-prev {
      left: 38px;
    }
    .swiper-button-next {
      right: 38px;
    }
  }
</style>
