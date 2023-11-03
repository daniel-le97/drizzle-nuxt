// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },
  alias: {
    // if not using pnpm
    // cookie: resolve(__dirname, "node_modules/cookie")
    cookie: 'cookie',
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@hebilicious/authjs-nuxt',
    '@vueuse/nuxt',
    // "@nuxtjs/color-mode",
  ],

  // colorMode: {
  //   preference: 'system', // default value of $colorMode.preference
  //   fallback: 'light', // fallback value if not system preference found
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme',
  //   classPrefix: '',
  //   classSuffix: '-mode',
  //   storageKey: 'nuxt-color-mode'
  // },
  authJs: {
    // default configuration
    // verifyClientOnEveryRequest: true,
    guestRedirectTo: '/', // where to redirect if the user is not authenticated
    // authenticatedRedirectTo: '/', // where to redirect if the user is authenticated
    // baseUrl: 'http://localhost:3000' // should be something like https://www.my-app.com
  },
  tailwindcss: {
    config: {
      plugins: [require('daisyui')],
    },
    exposeConfig: true,
    injectPosition: 'last',
    darkMode: 'class',
    daisyui: {
      theme: [],
    },
  },
  build: {
    transpile: ['trpc-nuxt'],
  },
  runtimeConfig: {
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
      },
    },
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET,
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET,
    },
    db: {
      url: process.env.PG_DB_URL!,
      dir: './server/db',
    },
  },
})
