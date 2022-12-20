<i18n src="@/lang/components/ProdSlider.json"></i18n> 

<template>
  <section class="ProdSlider" id="products">
    <div class="ProdSlider__inner">
      <div class="ProdSlider__mtitle wow fadeInUp">
        <h1 class="container">OTTAKU  5 in 1 EFFECT</h1>
      </div>
      <div class="swiper ProdSlider__swiper wow fadeInUp">
        <div class="swiper-wrapper ProdSlider__swiper-wrapper">
          <div 
            v-for="(slide, index) in slides"
            :key="index"
            class="swiper-slide ProdSlider__slide"
          >
            <div class="ProdSlider__img">
              <img :src="slide.path" :alt="slide.value" class="desk"/>
              <img :src="slide.path2" :alt="slide.value" class="mob"/>
            </div>
            <button class="ProdSlider__button" @click="openModalHandler(index)">
              <img src="@/assets/ico/search.svg" alt="more">
              {{ $t('more')}}
            </button>
            <div class="ProdSlider__modal" :class="{isOpen: slide.isOpen}">
              <button class="ProdSlider__modal-close" @click="closeModalHandler">
                <img src="@/assets/ico/ClearCancel.svg" alt="close">
              </button>
              <div v-html="slide.left" class="ProdSlider__modal-left"></div>
              <div v-html="slide.right" class="ProdSlider__modal-right"></div>
            </div>
          </div>
        </div>
        <div class="ProdSlider__pag">
          <div class="swiper-pagination"></div>
        </div>
        <div class="swiper-button-prev" v-show="sliderButtonsShow"></div>
        <div class="swiper-button-next" v-show="sliderButtonsShow"></div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'

export default {
  data() {
    return {
      slides: [
        { 
          id: 0,
          value: "OTTAKU  5 in 1 EFFECT",
          isOpen: false,
          path: require("@/assets/img/prod1.png"),
          path2: require("@/assets/img/prod-tab1.png"),
          left: this.$t('slides[0].left'),
          right: this.$t('slides[0].right')
        },
        {
          id: 1,
          value: "OTTAKU  5 in 1 EFFECT",
          isOpen: false,
          path: require("@/assets/img/prod2.png"),
          path2: require("@/assets/img/prod-tab2.png"),
          left: this.$t('slides[1].left'),
          right: this.$t('slides[1].right')
        },
      ],
      sliderButtonsShow: true,
    }
  },
  methods: {
    openModalHandler(index) {
      this.closeModalHandler()
      this.slides[index].isOpen = true
      this.sliderButtonsShow = false
    },
    closeModalHandler() {
      this.slides.forEach(i => i.isOpen = false)
      this.sliderButtonsShow = true
    }
  },
  mounted() {
    const ProdSlider = new Swiper('.ProdSlider__swiper', {
      loop: false,
      effect: 'fade',
      grabCursor: false,
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
    ProdSlider.on('slideChange', this.closeModalHandler);
  },
}
</script>
<style lang="scss">
  .ProdSlider {
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    padding-top: 36px;
    background-image: url('@/assets/ico/prodPattern.svg');
    background-size: auto 100%;
    background-position: right top;
    background-repeat: no-repeat;
    &__mtitle {
      position: absolute;
      top: 62px;
      width: 100%;
      z-index: 10;
      font-family: $secondary-font-family;
      font-weight: 700;
      font-size: 26px;
      line-height: 120.02%;
      padding-left: 98px;
    }
    &__slide {
      position: relative;
      padding-bottom: 66px;
      opacity: 0 !important;
      &.swiper-slide-active {
        opacity: 1 !important;
        z-index: 20;
      }
    }
    &__img {
      height: 635px;
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
      bottom: 71px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      padding-right: 35px;
      background-color: $accent;
      font-size: 20px;
      color: $light-text;
      z-index: 10;
      transition: background 300ms;
      &:hover {
        background-color: $accent-hover;
      }
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
      bottom: 63px;
      transform: translateX(-100vw);
      z-index: 20;
      max-width: 610px;
      width: 100%;
      padding: 20px;
      background-color: $light-bg;
      color: $dark-text;
      display: flex;
      justify-content: space-between;
      transition: transform 300ms;
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
          font-family: $secondary-font-family;
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
      position: absolute;
      left: 0;
      bottom: 20px;
      width: 100%;
      z-index: 20;
      .swiper-pagination {
        width: 100%;
        position: static;
      }
      .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        border: 1px solid $accent;
        background-color: transparent;
        margin-right: 9px;
        opacity: 1;
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
    @media (max-width: $tab) {
      padding-top: 86px;
      background-image: url('@/assets/ico/prodPatternTab.svg');
      background-size: auto 100%;
      background-position: right top;
      &__mtitle {
        top: 67px;
        padding-left: 0;
      }
      &__slide {
        padding-bottom: 177px;
      }
      &__img {
        height: 664px;
        .mob {
          display: block;
        }
        .desk {
          display: none;
        }
      }
      &__button {
        bottom: 88px;
        left: 50%;
        padding: 20px;
        padding-right: 35px;
        font-size: 20px;
      }
      &__modal {
        transform: translateX(-150vw);
        bottom: 63px;
        max-width: 332px;
        padding: 10px;
        flex-direction: column-reverse;
      }
      &__modal-close {
        right: 10px;
        top: 10px;
      }
      &__modal-left {
        font-size: 14px;
        max-width: none;
        padding-bottom: 10px;
      }
      &__modal-right {
        max-width: none;
        margin-bottom: 30px;
        p {
          font-size: 24px;
        }
        table {
          padding: 15px 10px;
          td:first-child {
            font-size: 12px;
          }
          td:last-child {
            font-size: 12px;
          }
        }
      }
      .swiper-button-next,
      .swiper-button-prev {
        top: auto;
        bottom: 140px;
        &::after {
          font-size: 50px;
        }
      }

    }
    @media (max-width: $tab - 250) {
      padding-top: 36px;
    }
    @media (max-width: $mob) {
      padding-top: 66px;
      background-size: auto 100%;
      background-position: center top;
      &__mtitle {
        top: 13px;
        text-align: center;
      }
      &__slide {
        padding-bottom: 224px;
      }
      &__img {
        height: 364px;
      }
      &__button {
        bottom: 76px;
        left: 50%;
        width: calc(100% - 40px);
        padding: 20px;
        padding-right: 35px;
        font-size: 20px;
      }
      &__modal {
        bottom: 74px;
        max-width: none;
        width: calc(100% - 40px);
        padding: 10px;
        flex-direction: column-reverse;
      }
      &__modal-close {
        right: 10px;
        top: 10px;
      }
      &__modal-left {
        font-size: 14px;
        max-width: none;
        padding-bottom: 10px;
      }
      &__modal-right {
        max-width: none;
        margin-bottom: 30px;
        p {
          font-size: 20px;
        }
        table {
          padding: 15px 10px;
          td:first-child {
            font-size: 15px;
          }
          td:last-child {
            font-size: 12px;
          }
        }
      }
      .swiper-pagination-bullet {
        width: 9px;
        height: 9px;
        margin: 0 !important;
        margin-right: 5px !important;
      }
      .swiper-button-next,
      .swiper-button-prev {
        top: auto;
        bottom: 166px;
        &::after {
          font-size: 30px;
        }
      }
      .swiper-button-next {
        right: 10px;
      }
      .swiper-button-prev {
        left: 10px;
      }

    }
    @media (max-width: $mob - 150) {
      padding-top: 36px;
    }
  }
</style>
