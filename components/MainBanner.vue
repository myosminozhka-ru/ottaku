<template>
  <div class="MainBanner">
    <div class="MainBanner__inner">
      <div class="swiper MainBanner__swiper">
        <div class="swiper-wrapper MainBanner__swiper-wrapper">
          <div 
            v-for="image in shuffledImages"
            :key="image.id"
            class="swiper-slide MainBanner__slide"
          >
            <img :src="image.path" alt="" />
          </div>
        </div>
      </div>
      <div class="MainBanner__over">
        <div class="container">
          <div class="MainBanner__over-inner">
            <div class="MainBanner__pag">
              <div class="swiper-pagination"></div>
            </div>
            <div class="MainBanner__content">
              <div class="MainBanner__img">
                <img src="@/assets/img/banner1.png" alt="" />
              </div>
              <div class="MainBanner__text">
                Your home is safe, comfortable, cosy, confidence or... purity.
                <br />
                <br />
                Professionals from Hospitality and Restorante communitypropose to
                yuo high-performance home detergents with guaranteed results.
                <br />
                <br />
                We always wish to have the comforts of home in our hotels,
                restaurants and cafes, and we know best how to keep it clean and
                safe.
              </div>
            </div>
          </div>
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
      images: [
        { 
          id: 1,
          value: "img",
          path: require("@/assets/img/slide1.jpg"),
        },
        {
          id: 2,
          value: "img",
          path: require("@/assets/img/slide2.jpg"),
        },
        {
          id: 3,
          value: "img",
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
      // autoplay: {
      //   delay: 5000,
      // },
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
      &::before {
        content: "";
        display: block;
        width: 33.4%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0; 
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
      }
      &::after {
        content: "";
        display: block;
        width: 66.6%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0; 
        background: linear-gradient(269.8deg, rgba(255, 255, 255, 0.8) 0.09%, rgba(255, 255, 255, 0.8) 55.11%, rgba(255, 255, 255, 0) 99.75%), rgba(255, 255, 255, 0.2);
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
  }
</style>
