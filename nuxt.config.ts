import config from './config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  rapidlaunch: {
    config
  },
  extends: [
    '@rapidlaunch-it/nuxt-rapidlaunch'
  ]
})
