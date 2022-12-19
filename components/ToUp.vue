<template>
  <div 
    v-show="init"
    class="ToUp animated" 
    :class="{bounceInUp: isShow, bounceOutDown: !isShow}"
  >
    <div class="container">
      <div class="ToUp__inner">
        <button class="ToUp__button" @click="toUp">
          <div class="ToUp__ico">
            <img src="@/assets/ico/up.svg" alt="">
          </div>
          <div class="ToUp__text">
            {{ $t('up') }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: null,
      init: false,
    }
  },
  methods: {
    toUp() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    scrollHandler(e) {
      if (window.pageYOffset > 230) {
        this.init = true
        this.show()
      } else {
        this.hide()
      }
    },
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>
<style lang="scss">
  .ToUp {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 20px;
    z-index: 100;
    &__inner {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    &__button {
      position: absolute;
      bottom: 100%;
      right: 0;
      display: flex;
      align-items: center;
      background-color: $accent;
      padding: 15px 44px 15px 22px;
      cursor: pointer;
      transition: background 300ms;
      &:hover {
        background-color: $accent-hover;
      }
    }
    &__ico {
      width: 33px;
      height: 30px;
      margin-right: 38px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &__text {
      font-family: '$secondary-font-family';
      font-weight: 700;
      color: $light-text;
    }
    @media (max-width: $mob) {
      &__button {
        padding: 18px;
      }
      &__ico {
        margin-right: 0;
      }
      &__text {
        display: none;
      }
    }
  }
</style>