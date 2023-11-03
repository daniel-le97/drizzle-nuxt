// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path"

export default defineNuxtConfig({
  alias: {
    cookie: "cookie"
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@hebilicious/authjs-nuxt"],
  authJs: {
    // default configuration
    verifyClientOnEveryRequest: true,
    guestRedirectTo: "/", // where to redirect if the user is not authenticated
    authenticatedRedirectTo: "/", // where to redirect if the user is authenticated
    baseUrl: "" // should be something like https://www.my-app.com
  },
  tailwindcss: {
    config: {
      plugins: [require("daisyui")],
    },
    exposeConfig: true,
    injectPosition: "last",
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
  runtimeConfig: {
    public:{
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
      }
    },
    auth:{
      secret: process.env.NUXT_NEXTAUTH_SECRET,
      github: {
        clientId: process.env.NUXT_GITHUB_CLIENT_ID,
        clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
      
    }
  },
    db: {
      url: process.env.PG_DB_URL!,
      dir: "./server/db",
    },
  },
});
 