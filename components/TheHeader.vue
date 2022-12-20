<template>
  <div class="TheHeader wow slideInDown">
    <div class="container">
      <div class="TheHeader__inner">
        <NuxtLink to="/" class="TheHeader__logo">
          <div class="TheHeader__logo-text">
            <img src="@/assets/ico/logo-text.jpg" alt="logo" />
          </div>
          <div class="TheHeader__logo-img">
            <img
              src="@/assets/ico/logo.png"
              alt="logo"
              class="wow fadeIn"
              :class="{hide: isScrolled}"
              data-wow-delay="2s"
            />
          </div>
        </NuxtLink>
        <div class="TheHeader__menu" :class="{ isOpen: isMenuOpen }">
          <div class="TheHeader__menu-list">
            <a
              to="#about_us"
              class="TheHeader__menu-item"
              @click.prevent="$nuxt.$emit('onMenuAnchorClick', 'about_us'), isMenuOpen = false"
            >
              <span class="TheHeader__menu-title">
                {{ $t('menu.about_us') }}
              </span>
            </a>
            <a
              to="#products"
              class="TheHeader__menu-item"
              @click.prevent="$nuxt.$emit('onMenuAnchorClick', 'products'), isMenuOpen = false"
            >
              <span class="TheHeader__menu-title">
                {{ $t('menu.products') }}
              </span>
            </a>
            <a
              to="#contacts"
              class="TheHeader__menu-item"
              @click.prevent="$nuxt.$emit('onMenuAnchorClick', 'contacts'), isMenuOpen = false"
            >
              <span class="TheHeader__menu-title">
                {{ $t('menu.contacts') }}
              </span>
            </a>
          </div>
        </div>
        <div class="TheHeader__right">
          <div class="TheHeader__langs">
            <NuxtLink :to="switchLocalePath('ko')" class="TheHeader__lang">
              KOR
            </NuxtLink>
            /
            <NuxtLink :to="switchLocalePath('en')" class="TheHeader__lang">
              ENG
            </NuxtLink>
          </div>
          <!-- <div class="TheHeader__socials">
            <a href="/" target="_blank" class="TheHeader__social">
              <svg width="16" height="33" viewBox="0 0 16 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9997 5.47777L13.0996 5.47914C10.8257 5.47914 10.3854 6.63656 10.3854 8.33514V12.0804H15.8085L15.8066 17.9467H10.3854V33H4.72895V17.9467H0V12.0804H4.72895V7.75454C4.72895 2.73391 7.59226 0 11.7737 0L16 0.00720172L15.9997 5.47777Z"/>
              </svg>
            </a>
            <a href="/" target="_blank" class="TheHeader__social">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16667 0C4.10483 0 0 4.10483 0 9.16667V23.8333C0 28.8952 4.10483 33 9.16667 33H23.8333C28.8952 33 33 28.8952 33 23.8333V9.16667C33 4.10483 28.8952 0 23.8333 0H9.16667ZM27.5 3.66667C28.512 3.66667 29.3333 4.488 29.3333 5.5C29.3333 6.512 28.512 7.33333 27.5 7.33333C26.488 7.33333 25.6667 6.512 25.6667 5.5C25.6667 4.488 26.488 3.66667 27.5 3.66667ZM16.5 7.33333C21.5618 7.33333 25.6667 11.4382 25.6667 16.5C25.6667 21.5618 21.5618 25.6667 16.5 25.6667C11.4382 25.6667 7.33333 21.5618 7.33333 16.5C7.33333 11.4382 11.4382 7.33333 16.5 7.33333ZM16.5 11C15.0413 11 13.6424 11.5795 12.6109 12.6109C11.5795 13.6424 11 15.0413 11 16.5C11 17.9587 11.5795 19.3576 12.6109 20.3891C13.6424 21.4205 15.0413 22 16.5 22C17.9587 22 19.3576 21.4205 20.3891 20.3891C21.4205 19.3576 22 17.9587 22 16.5C22 15.0413 21.4205 13.6424 20.3891 12.6109C19.3576 11.5795 17.9587 11 16.5 11Z"/>
              </svg>
            </a>
          </div> -->
          <button
            class="TheHeader__burger"
            :class="{ isActive: isMenuOpen }"
            @click="isMenuOpen = !isMenuOpen"
          >
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
    }
  },
  methods: {
    scrollHandler(e) {
      if (window.pageYOffset > 130) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
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
.TheHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: $light-bg;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    display: inline-block;
    width: 325px;
    position: relative;
  }
  &__logo-img {
    width: 244px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    img.hide {
      opacity: 0 !important;
    }
  }
  &__menu-list {
    display: flex;
  }
  &__menu-item {
    font-family: $secondary-font-family;
    font-weight: 500;
    min-height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    transition: 200ms background;
    &.active,
    &:hover {
      background: linear-gradient(
        180deg,
        rgba(128, 204, 191, 0.5) 0%,
        rgba(217, 217, 217, 0) 91.96%
      );
    }
  }
  &__menu-title {
    font-size: 20px;
  }
  &__right {
    display: flex;
    align-items: center;
  }
  &__langs {
    font-family: $secondary-font-family;
    color: $grey;
  }
  &__lang {
    &:hover {
      color: $accent;
    }
    &.nuxt-link-exact-active {
      font-weight: 700;
      color: $accent;
    }
  }
  &__socials {
    display: flex;
    align-items: center;
  }
  &__social {
    width: 33px;
    height: 33px;
    margin-right: 15px;
    color: $accent;
    &:last-child {
      margin-right: 0;
    }
    svg {
      width: 100%;
    }
    path {
      fill: currentColor;
      transition: color 300ms;
    }
    &:hover {
      color: $accent-hover;
    }
  }
  &__burger {
    display: none;
  }
  @media (max-width: $tab) {
    &__inner {
      min-height: 80px;
    }
    &__logo {
      width: 264px;
    }
    &__logo-text {
      height: 58px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &__logo-img {
      width: 198px;
    }
    &__menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow: auto;
      background-color: #fff;
      transform: translateX(-120%);
      transition: transform 200ms;
      &.isOpen {
        transform: translateX(0);
      }
    }
    &__menu-list {
      display: block;
    }
    &__menu-item {
      display: block;
      min-height: auto;
      padding: 20px 30px;
    }
    &__menu-title {
      font-size: 16px;
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__right {
      display: flex;
      align-items: center;
    }
    &__langs {
      margin-right: 35px;
    }
    &__lang {
      &:hover {
        color: $accent;
      }
    }
    &__socials {
      display: flex;
      align-items: center;
      margin-right: 35px;
    }
    &__burger {
      display: block;
      position: relative;
      height: 28px;
      width: 28px;

      .hamburger-lines {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .hamburger-lines .line {
        display: block;
        height: 3px;
        width: 100%;
        background: $accent;
      }

      .hamburger-lines .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
      }

      .hamburger-lines .line2 {
        transition: transform 0.2s ease-in-out;
      }

      .hamburger-lines .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
      }
      &.isActive .menu-items {
        transform: translateX(0);
      }

      &.isActive .hamburger-lines .line1 {
        transform: rotate(45deg);
        width: 130%;
      }

      &.isActive .hamburger-lines .line2 {
        transform: scaleY(0);
      }

      &.isActive .hamburger-lines .line3 {
        transform: rotate(-45deg);
        width: 130%;
      }

      &.isActive .logo {
        display: none;
      }
    }
  }
  @media (max-width: $mob) {
    &__inner {
      min-height: 53px;
    }
    &__logo {
      padding-top: 12px;
      padding-bottom: 6px;
      width: 156px;
    }
    &__logo-text {
      height: 35px;
    }
    &__logo-img {
      width: 96px;
      left: 0;
      transform: translateX(0);
    }
    &__langs {
      font-size: 12px;
      margin-right: 8px;
    }
    &__socials {
      margin-right: 14px;
    }
    &__social {
      width: 26px;
      height: 26px;
      margin-right: 8px;
    }
    &__burger {
      height: 24px;
      width: 24px;
    }
  }
}
</style>
