// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'node:path'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'en',  iso: 'en-US', name:'English' , file:'en.json' },
      { code: 'es' ,iso: 'es-ES', name:'Español', file:'es.json' },
    ],

    defaultLocale: 'es',
    // lazy: true,
    langDir: resolve(__dirname, 'locales'),
    customRoutes: 'config',

    pages:{
      about:{
        en: '/about-us',
        es: '/sobre',
      },
      proyect:{
        en: '/proyect',
        es: '/proyecto',
      }
  
    },

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' 
    }
    
  },
  compatibilityDate: '2024-11-01',

  css :[
    '~/assets/css/tailwind.css',
  ]
})