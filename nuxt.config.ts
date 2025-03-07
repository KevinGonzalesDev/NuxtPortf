// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.json' },
      { code: 'es', iso: 'es-ES', file: 'es-ES.json' }
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  css :[
    '~/assets/css/tailwind.css',
  ]
})
