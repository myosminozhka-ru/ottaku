<template>
  <div class="TheHeader">
    <div class="container">
      <div class="TheHeader__inner">
        <NuxtLink to="/" class="TheHeader__logo">
          <div class="TheHeader__logo-text">
            <img src="@/assets/ico/logo-text.jpg" alt="logo">
          </div>
          <div class="TheHeader__logo-img">
            <img src="@/assets/ico/logo.png" alt="logo">
          </div>
        </NuxtLink>
        <div class="TheHeader__menu">
          <div class="TheHeader__menu-list">
            <NuxtLink to="/" class="TheHeader__menu-item">
              <span class="TheHeader__menu-title">{{ $t('menu.about_us') }}</span>
              <span class="TheHeader__menu-subtitle">about us</span>
            </NuxtLink>
            <NuxtLink to="/" class="TheHeader__menu-item">
              <span class="TheHeader__menu-title">{{ $t('menu.products') }}</span>
              <span class="TheHeader__menu-subtitle">products</span>
            </NuxtLink>
            <NuxtLink to="/" class="TheHeader__menu-item">
              <span class="TheHeader__menu-title">{{ $t('menu.contacts') }}</span>
              <span class="TheHeader__menu-subtitle">contacts</span>
            </NuxtLink>
          </div>
        </div>
        <div class="TheHeader__right">
          <div class="TheHeader__langs">
            <NuxtLink :to="switchLocalePath('ru')" class="TheHeader__lang">RUS</NuxtLink>/
            <NuxtLink :to="switchLocalePath('ko')" class="TheHeader__lang">KOR</NuxtLink>
          </div>
          <div class="TheHeader__socials">
            <a href="/" class="TheHeader__social">
              <img src="@/assets/ico/facebook.svg" alt="">
            </a>
            <a href="/" class="TheHeader__social">
              <img src="@/assets/ico/instagram.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 96px;
      padding: 15px;
      transition: 200ms background;
      &.active,
      &:hover {
        background: linear-gradient(180deg, rgba(128, 204, 191, 0.5) 0%, rgba(217, 217, 217, 0) 91.96%);
      }
    }
    &__menu-title {
      font-size: 20px;
      margin-bottom: 5px;
    }
    &__menu-subtitle {
      font-size: 14px;
      color: $grey;
      text-transform: uppercase;
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
      &.nuxt-link-active {
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
  }
</style>