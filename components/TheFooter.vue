<i18n src="@/lang/components/TheFooter.json"></i18n> 

<template>
  <footer class="TheFooter wow fadeInUp" id="contacts">
    <div class="container">
      <div class="TheFooter__inner">
        <div class="TheFooter__head wow fadeInUp">
          <h3 class="TheFooter__suptitle">{{ $t('suptitle') }}</h3>
          <h2 class="TheFooter__mtitle">{{ $t('title') }} <span></span></h2>
        </div>
        <div class="TheFooter__content wow fadeInUp">
          <div class="TheFooter__left">
            <div class="TheFooter__text" v-html="$t('text')"></div>
            <div class="TheFooter__list">
              <div class="TheFooter__item wow fadeInUp">
                <div class="TheFooter__title">e-mail:</div>
                <a href="mailto:info@ottaku.kr" target="_blank" class="TheFooter__mail">info@ottaku.kr</a><br>
              </div>
              <!-- <div class="TheFooter__item wow fadeInUp">
                <div class="TheFooter__title">SOCIAL MEDIA:</div>
                <div class="TheFooter__socials">
                  <a href="mailto:contact@company-name.com" target="_blank" class="TheFooter__social">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="31" height="31" />
                      <path d="M19.9998 9.15387L18.3685 9.15466C17.0894 9.15466 16.8418 9.82105 16.8418 10.799V12.9554H19.8923L19.8912 16.3329H16.8418V25H13.66V16.3329H11V12.9554H13.66V10.4647C13.66 7.57407 15.2706 6 17.6227 6L20 6.00415L19.9998 9.15387Z" fill="#003A5D"/>
                    </svg>
                  </a>
                  <a href="mailto:contact@company-name.com" target="_blank" class="TheFooter__social">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="31" height="31"/>
                      <path d="M11.2778 6C8.36339 6 6 8.239 6 11V19C6 21.761 8.36339 24 11.2778 24H19.7222C22.6366 24 25 21.761 25 19V11C25 8.239 22.6366 6 19.7222 6H11.2778ZM21.8333 8C22.416 8 22.8889 8.448 22.8889 9C22.8889 9.552 22.416 10 21.8333 10C21.2507 10 20.7778 9.552 20.7778 9C20.7778 8.448 21.2507 8 21.8333 8ZM15.5 10C18.4144 10 20.7778 12.239 20.7778 15C20.7778 17.761 18.4144 20 15.5 20C12.5856 20 10.2222 17.761 10.2222 15C10.2222 12.239 12.5856 10 15.5 10ZM15.5 12C14.6601 12 13.8547 12.3161 13.2608 12.8787C12.667 13.4413 12.3333 14.2044 12.3333 15C12.3333 15.7956 12.667 16.5587 13.2608 17.1213C13.8547 17.6839 14.6601 18 15.5 18C16.3399 18 17.1453 17.6839 17.7392 17.1213C18.333 16.5587 18.6667 15.7956 18.6667 15C18.6667 14.2044 18.333 13.4413 17.7392 12.8787C17.1453 12.3161 16.3399 12 15.5 12Z" fill="#003A5D"/>
                    </svg>
                  </a>
                </div>
              </div> -->
            </div>
          </div>
          <div class="TheFooter__right wow fadeInUp">
            <div class="TheFooter__img">
              <img src="@/assets/img/footer-man.png" alt="OTTAKU  5 in 1 EFFECT">
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .TheFooter {
    background-color: $dark-bg;
    color: $light-text;
    padding-top: 56px;
    background-image: url('@/assets/ico/footerPattern.svg');
    background-size: 850px auto;
    background-position: right top;
    background-repeat: no-repeat;
    &__inner {
      padding-left: 72px;
      padding-right: 17px;
    }
    &__suptitle {
      font-size: 15px;
      color: $accent;
      letter-spacing: 0.35em;
    }
    &__mtitle {
      font-family: $secondary-font-family;
      font-weight: 300;
      font-size: 52px;
      line-height: 120.02%;
      margin-bottom: 46px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
      span {
        flex-shrink: 0;
        width: 24px;
        display: inline-block;
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: $accent;
        margin-top: 15px;
      }
    }
    &__content {
      display: flex;
      justify-content: space-between;
    }
    &__text {
      font-family: $secondary-font-family;
      font-weight: 300;
      font-size: 14px;
      line-height: 125%;
      margin-bottom: 52px;
    }
    &__item {
      margin-bottom: 49px;
    }
    &__title {
      font-family: $secondary-font-family;
      font-weight: 500;
      text-transform: uppercase;
      color: $accent;
      font-size: 14px;
      line-height: 125%;
      margin-bottom: 18px;
    }
    &__mail {
      font-family: $secondary-font-family;
      font-weight: 500;
      font-size: 14px;
      line-height: 145%;
      letter-spacing: -0.01em;
      text-transform: lowercase;
      transition: color 300ms;
      &:hover {
        color: $accent-hover;
      }
    }
    &__social {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 7px;
      color: $accent;
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      rect {
        fill: currentColor;
        transition: color 300ms;
      }
      &:hover {
        color: $accent-hover;
      }
    }
    &__img {
      width: 475px;
      margin-top: -46px;
    }
    @media (max-width: $tab) {
      background-color: $dark-bg;
      color: $light-text;
      padding-top: 64px;
      background-image: url('@/assets/ico/footerPatternTab.svg');
      background-size: auto 100%;
      background-position: right bottom;
      &__inner {
        padding-left: 8px;
        padding-right: 0;
      }
      &__suptitle {
        font-size: 15px;
        margin-bottom: 13px;
      }
      &__mtitle {
        font-size: 42px;
        margin-bottom: 46px;
        span {
          width: 44px;
        }
        &::after {
          margin-top: 3px;
        }
      }
      &__content {
        display: flex;
        justify-content: space-between;
      }
      &__text {
        font-family: $secondary-font-family;
        font-weight: 300;
        font-size: 14px;
        line-height: 125%;
        margin-bottom: 52px;
      }
      &__item {
        margin-bottom: 49px;
      }
      &__title {
        font-family: $secondary-font-family;
        font-weight: 500;
        text-transform: uppercase;
        color: $accent;
        font-size: 14px;
        line-height: 125%;
        margin-bottom: 18px;
      }
      &__mail {
        font-family: $secondary-font-family;
        font-weight: 500;
        font-size: 14px;
        line-height: 145%;
        letter-spacing: -0.01em;
        text-transform: lowercase;
      }
      &__social {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 7px;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      &__img {
        width: 363px;
        margin-top: 4px;
      }

    }
    @media (max-width: $mob) {
      background-size: auto 700px;
      background-position: right bottom;
      background-image: url('@/assets/ico/footerPatternMob.svg');
      &__inner {
        padding-left: 8px;
        padding-right: 0;
      }
      &__suptitle {
        font-size: 11px;
        margin-bottom: 13px;
      }
      &__mtitle {
        font-size: 32px;
        margin-bottom: 40px;
        span {
          width: 28px;
        }
        &::after {
          margin-top: 5px;
        }
      }
      &__content {
        display: block;
        padding-bottom: 40px;
      }
      &__img {
        width: 100%;
        margin-top: -28px;
      }  
    }
  }
</style>