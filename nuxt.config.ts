// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/device',
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  image: {
    imageenging : {
      baseUrl: 'https://85iby668.dev.cdn.imgeng.in',
      modifier : {
        format: 'avif',
        quality: '50%',
        fit: 'cover'
      }
    }
  }
})