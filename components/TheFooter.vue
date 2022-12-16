<template>
  <div class="TheFooter">
    <div class="container">
      <div class="TheFooter__inner">
        <div class="TheFooter__head">
          <div class="TheFooter__suptitle">Connect with us</div>
          <div class="TheFooter__mtitle">Contacts <span></span></div>
        </div>
        <div class="TheFooter__content">
          <div class="TheFooter__left">
            <div class="TheFooter__text">
              We are  professionals of the HORECA <br> 
              community, <br>
              creating, especially for your home, certified <br>
              innovative Korean formula
            </div>
            <div class="TheFooter__list">
              <div class="TheFooter__item">
                <div class="TheFooter__title">e-mail:</div>
                <a href="mailto:contact@company-name.com" class="TheFooter__mail">contact@company-name.com</a><br>
                <a href="mailto:contact@company-name.com" class="TheFooter__mail">client@company-name.com</a>
              </div>
              <div class="TheFooter__item">
                <div class="TheFooter__title">SOCIAL MEDIA:</div>
                <div class="TheFooter__socials">
                  <a href="mailto:contact@company-name.com" class="TheFooter__social">
                    <img src="@/assets/ico/facebook2.svg" alt="">
                  </a>
                  <a href="mailto:contact@company-name.com" class="TheFooter__social">
                    <img src="@/assets/ico/instagram2.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="TheFooter__right">
            <div class="TheFooter__img">
              <img src="@/assets/img/footer-man.png" alt="">
            </div>
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
  .TheFooter {
    background-color: $dark-bg;
    color: $light-text;
    padding-top: 56px;
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
      font-family: 'Vela Sans';
      font-weight: 300;
      font-size: 52px;
      line-height: 120.02%;
      margin-bottom: 46px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
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
      font-family: 'Vela Sans';
      font-weight: 300;
      font-size: 14px;
      line-height: 125%;
      margin-bottom: 52px;
    }
    &__item {
      margin-bottom: 49px;
    }
    &__title {
      font-family: 'Vela Sans';
      font-weight: 500;
      text-transform: uppercase;
      color: $accent;
      font-size: 14px;
      line-height: 125%;
      margin-bottom: 18px;
    }
    &__mail {
      font-family: 'Vela Sans';
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
      width: 475px;
      margin-top: -46px;
    }
  }
</style>