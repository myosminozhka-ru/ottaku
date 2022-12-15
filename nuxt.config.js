export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ottaku',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/_fonts.scss",
    "@/assets/scss/_normalize.scss",
    "@/assets/scss/_settings.scss",
  ],

  styleResources: {
    scss: ["./assets/scss/_variables.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
    '@nuxtjs/i18n',
  ],

  i18n: {
    defaultLocale: "ru",
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    // differentDomains: true,
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'ru',
        file: 'ru.json',
      },
      {
        code: 'ko',
        file: 'ko.json',
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
