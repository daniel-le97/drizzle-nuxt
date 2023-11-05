import { MotionPlugin } from '@vueuse/motion'

// we are using this plugin here because when it gets added as a nuxt Module @vueuse/motion/nuxt
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MotionPlugin)
})
