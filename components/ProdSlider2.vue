<i18n src="@/lang/components/ProdSlider2.json"></i18n> 

<template>
  <section class="ProdSlider2">
    <div class="ProdSlider2__inner">
      <div class="swiper ProdSlider2__swiper wow fadeInUp">
        <div class="swiper-wrapper ProdSlider2__swiper-wrapper">
          <div 
            v-for="(slide, index) in slides"
            :key="index"
            class="swiper-slide ProdSlider2__slide"
          >
            <div class="ProdSlider2__item">
              <div class="ProdSlider2__img">
                <img :src="slide.path" :alt="slide.value"/>
              </div>
              <div class="ProdSlider2__content">
                <div v-if="slide.img">
                  <img :src="slide.img" alt="">
                </div>
                <div v-else-if="slide.text" class="ProdSlider2__text" v-html="slide.text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="ProdSlider2__controller">
          <div class="swiper-button-prev"></div>
          <div class="ProdSlider2__pag">
            <div class="swiper-pagination"></div>
          </div>
          <div class="swiper-button-next"></div>
        </div>
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
          path: require("@/assets/img/prodSlider1.jpg"),
          text: this.$t('slides[0].text'),
        },
        { 
          id: 1,
          value: "OTTAKU  5 in 1 EFFECT",
          path: require("@/assets/img/prodSlider2.jpg"),
          text: this.$t('slides[1].text')
        },
        { 
          id: 2,
          value: "OTTAKU  5 in 1 EFFECT",
          path: require("@/assets/img/prodSlider3.jpg"),
          text: this.$t('slides[2].text'),
          img: require("@/assets/img/text-img.png"),
        },
      ],
    }
  },
  mounted() {
    window.ProdSlider2 = new Swiper('.ProdSlider2__swiper', {
      loop: false,
      effect: 'fade',
      grabCursor: false,
      modules: [Navigation, Pagination, EffectFade],
      pagination: {
        el: '.ProdSlider2 .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // autoplay: {
      //   delay: 9000,
      // },
      navigation: {
        nextEl: '.ProdSlider2 .swiper-button-next',
        prevEl: '.ProdSlider2 .swiper-button-prev',
      },
    })
  },
}
</script>
<style lang="scss">
  .ProdSlider2 {
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    padding-top: 63px;
    padding-bottom: 37px;
    background-image: url('@/assets/img/grid-bg.svg');
    background-repeat: repeat-x;
    background-position: top 10px center;
    &__slide {
      position: relative;
      padding-bottom: 60px;
      opacity: 0 !important;
      z-index: 0 !important;
      &.swiper-slide-active {
        opacity: 1 !important;
        z-index: 20 !important;
      }
    }
    &__item {
      max-width: 1520px;
      margin: 0 auto;
      position: relative;
    }
    &__img {
      aspect-ratio: 15.7/9;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__content {
      display: flex;
      align-items: center;
      position: absolute;
      left: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.70);
      backdrop-filter: blur(3px);
      min-height: 166px;
      padding: 54px;
      max-width: 580px;
      width: 100%;
      font-size: 26px;
      line-height: 1.1;
      img {
        max-width: 400px;
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
      transform: translateY(-92%);
      &::after {
        font-size: 64px;
      }
    }
    .swiper-button-prev {
      left: 64px;
    }
    .swiper-button-next {
      right: 64px;
    }
    @media (max-width: $tab) {
      padding: 20px 16px;
      background-size: 750px;
      &__slide {
        position: relative;
        padding-bottom: 0px;
      }
      &__img {
        aspect-ratio: 15.7/9;
      }
      &__content {
        min-height: 92px;
        padding: 24px;
        max-width: 100%;
        width: 100%;
        font-size: 20px;
        img {
          max-width: 250px;
        }
      }
      &__controller {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__pag {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: static;
        .swiper-pagination {
          width: 100%;
          position: static;
        }
        .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          margin-right: 9px;
        }
      }
      .swiper-button-next,
      .swiper-button-prev {
        position: static;
        transform: none;
        margin: 0;
        &::after {
          font-size: 40px;
        }
      }

    }
    @media (max-width: $mob) {
      padding: 20px 16px 12px;
      background-size: 750px;
      &__slide {
        position: relative;
        padding-bottom: 0px;
      }
      &__img {
        aspect-ratio: 6.03/9;
      }
      &__content {
        min-height: 92px;
        padding: 24px;
        max-width: 100%;
        width: 100%;
        font-size: 20px;
        img {
          max-width: 200px;
        }
      }
      &__controller {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__pag {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: static;
        .swiper-pagination {
          width: 100%;
          position: static;
        }
        .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          margin: 0 !important;
          margin-right: 5px !important;
        }
      }
      .swiper-button-next,
      .swiper-button-prev {
        position: static;
        transform: none;
        width: 60px;
        margin: 0;
        &::after {
          font-size: 29px;
        }
      }

    }
  }
</style>
