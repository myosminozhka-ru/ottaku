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
              data-wow-delay="2s"
            />
          </div>
        </NuxtLink>
        <div class="TheHeader__menu" :class="{ isOpen: isMenuOpen }">
          <div class="TheHeader__menu-list">
            <a
              to="#about_us"
              class="TheHeader__menu-item"
              @click.prevent="$nuxt.$emit('onMenuAnchorClick', 'about_us')"
            >
              <span class="TheHeader__menu-title">
                {{ $t('menu.about_us') }}
              </span>
            </a>
            <a
              to="#products"
              class="TheHeader__menu-item"
              @click.prevent="$nuxt.$emit('onMenuAnchorClick', 'products')"
            >
              <span class="TheHeader__menu-title">
                {{ $t('menu.products') }}
              </span>
            </a>
            <a
              to="#contacts"
              class="TheHeader__menu-item"
              @click.prevent="$nuxt.$emit('onMenuAnchorClick', 'contacts')"
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
          <div class="TheHeader__socials">
            <a href="/" class="TheHeader__social">
              <img src="@/assets/ico/facebook.svg" alt="" />
            </a>
            <a href="/" class="TheHeader__social">
              <img src="@/assets/ico/instagram.svg" alt="" />
            </a>
          </div>
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
    }
  },
}
</script>
<style lang="scss">
.TheHeader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
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
  }
  &__menu-list {
    display: flex;
  }
  &__menu-item {
    font-family: $secondary-font-family;
    font-weight: 500;
    min-height: 96px;
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
    margin-right: 50px;
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
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__burger {
    display: none;
  }
  @media (max-width: $tab) {
    &__logo {
      padding-top: 22px;
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
