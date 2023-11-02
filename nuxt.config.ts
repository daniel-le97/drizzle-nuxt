// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  // css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
      content: ["./node_modules/flowbite/**/*.{js,ts}"],
      plugins: [require("daisyui")],
    },
    exposeConfig: true,
    injectPosition: "last",
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
  runtimeConfig: {
    db: {
      url: process.env.PG_DB_URL!,
      dir: "./server/db",
    },
  },
});
