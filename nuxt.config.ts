// https://nuxt.com/docs/api/configuration/nuxt-config
import {createResolver} from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },
  runtimeConfig: {
    db: {
      url: process.env.PG_DB_URL,
      dir: resolve('./server/db')
    }
  }
})
