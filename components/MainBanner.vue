<i18n src="@/lang/components/MainBanner.json"></i18n> 

<template>
  <section class="MainBanner" id="about_us">
    <div class="MainBanner__inner">
      <div class="swiper MainBanner__swiper wow fadeIn">
        <div class="swiper-wrapper MainBanner__swiper-wrapper">
          <div 
            v-for="image in shuffledImages"
            :key="image.id"
            class="swiper-slide MainBanner__slide"
          >
            <img :src="image.path" :alt="image.value" />
          </div>
        </div>
      </div>
      <div class="MainBanner__over wow fadeInUp" data-wow-delay="1s">
        <div class="MainBanner__over-left-bg"></div>
        <div class="container">
          <div class="MainBanner__over-inner">
            <div class="MainBanner__pag">
              <div class="swiper-pagination"></div>
            </div>
            <div class="MainBanner__content">
              <div class="MainBanner__img">
                <img src="@/assets/img/banner1.png" alt="OTTAKU  5 in 1 EFFECT" />
              </div>
              <div class="MainBanner__text" v-html="$t('text')"></div>
            </div>
          </div>
        </div>
        <div class="MainBanner__over-right-bg"></div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'

export default {
  data() {
    return {
      images: [
        { 
          id: 1,
          value: "ottaku",
          path: require("@/assets/img/slide1.jpg"),
        },
        {
          id: 2,
          value: "ottaku",
          path: require("@/assets/img/slide2.jpg"),
        },
        {
          id: 3,
          value: "ottaku",
          path: require("@/assets/img/slide3.jpg"),
        },
      ],
      shuffledImages: null
    }
  },
  methods: {
    shuffle() {
      let numbers = [...this.images];
      let first,
        second,
        temp,
        count = numbers.length;
      for (let i = 0; i < 10; i++) {
        first = Math.floor(Math.random() * count);
        second = Math.floor(Math.random() * count);
        temp = numbers[first];
        numbers[first] = numbers[second];
        numbers[second] = temp;
      }
      this.shuffledImages = numbers;
    }
  },
  mounted() {
    this.shuffle()
    const MainBanner = new Swiper('.MainBanner__swiper', {
      loop: false,
      effect: 'fade',
      grabCursor: true,
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      pagination: {
        el: '.MainBanner .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
    })
  },
}
</script>
<style lang="scss">
  .MainBanner {
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    &__slide {
      height: 100vh;
      max-height: 793px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__over {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      &-left-bg {
        width: 33.4%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0; 
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
      }
      &-right-bg {
        content: "";
        display: block;
        width: 66.6%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0; 
        background: linear-gradient(269.8deg, rgba(255, 255, 255, 0.8) 0.09%, rgba(255, 255, 255, 0.8) 55.11%, rgba(255, 255, 255, 0) 99.75%), rgba(255, 255, 255, 0.2);
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-image: url('@/assets/ico/bannerPattern.svg');
        background-size: 940px auto;
        background-position: right bottom;
        background-repeat: no-repeat;
      }
    }
    &__over-inner {
      display: flex;
      position: relative;
      z-index: 5;
    }
    &__pag {
      width: 33.4%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 34px;
      .swiper-pagination {
        width: 100%;
        position: static;
      }
      .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        border: 1px solid #fff;
        background-color: transparent;
        margin: 0 !important;
        margin-right: 9px !important;
        opacity: 1;
        &:last-child {
          margin-right: 0;
        }
      }
      .swiper-pagination-bullet-active {
        background-color: #fff;
      }
    }
    &__content {
      padding: 29px 13px;
      display: flex;
      width: 66.6%;
    }
    &__img {
      max-width: 487px;
    }
    &__text {
      max-width: 335px;
      font-size: 16px;
      line-height: 125.5%;
      padding: 63px 0;
    }
    @media (max-width: $tab) {
      &__slide {
        height: 608px;
        max-height: none;
      }
      &__over {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        &-left-bg {
          display: none;
        }
        &-right-bg {
          width: 370px;
        }
        &::after {
          display: none;
        }
      }
      &__pag {
        width: auto;
        flex-grow: 1;
        padding-bottom: 12px;
      }
      &__content {
        padding: 0;
        margin: 0;
        display: block;
        width: 370px - 28;
      }
      &__img {
        max-width: 279px;
      }
      &__text {
        max-width: none;
        font-size: 14px;
        line-height: 125.5%;
        padding: 0 37px;
        padding-bottom: 50px;
      }
      
    }
    @media (max-width: $mob) {
      &__slide {
        height: 367px;
      }
      &__over {
        position: relative;
        top: -35px;
        &-right-bg {
          display: none;
        }
      }
      &__over-inner {
        display: block;
        background: linear-gradient(269.8deg, rgba(255, 255, 255, 0.8) 0.09%, rgba(255, 255, 255, 0.8) 55.11%, rgba(255, 255, 255, 0) 99.75%), rgba(255, 255, 255, 0.2);
      }
      &__pag {
        position: absolute;
        top: -23px;
        width: auto;
        flex-grow: 1;
        justify-content: flex-start;
        padding-bottom: 12px;
        .swiper-pagination {
          width: auto;
        }
        .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          margin-right: 5px !important;
        }
      }
      &__content {
        width: 100%;
      }
      &__img {
        position: relative;
        top: -20px;
        max-width: 269px;
      }
      &__text {
        font-size: 16px;
        padding: 0 17px 8px 34px;
      }
      
    }
  }
</style>
