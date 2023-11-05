<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const targetIsVisible = ref(false)
const itemRefs = ref([])

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
    // console.log(isIntersecting);
  },
)
const plugins = [
  {
    name: 'Nuxt',
    image: 'https://imgs.search.brave.com/H-lJ3BpWOxay8dqqBF5qIjMeRk2AKZCwa09lkFZymPw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wMzY1LmdpdGxh/Yi5pby9udXh0anMt/Mi44LlgtZG9jL2Vu/L2xvZ29zL251eHQu/c3Zn.svg',
    description: 'The Intuitive Vue Framework',
    link: 'https://nuxt.com/',
  },
  {
    name: 'Drizzle',
    image: 'https://pbs.twimg.com/profile_images/1710017636166193152/7aUeiYMx_400x400.jpg',
    description: 'ORM with both relational and SQL-like query APIs, providing you best of both worlds when it comes to accessing your relational data.',
    link: 'https://orm.drizzle.team/',
  },
  {
    name: 'Drizzle Studio',
    image: 'https://orm.drizzle.team/_next/static/media/drizzle-studio.ad906532.jpg',
    description: 'Drizzle studio grabs your drizzle config file, connects to your database and lets you browse, add, delete and update everything based on your existing drizzle sql schema.',
    link: 'https://orm.drizzle.team/drizzle-studio/overview',
  },
  {
    name: 'ESLINT',
    image: 'https://cdn.iconscout.com/icon/free/png-512/free-eslint-3521412-2944856.png?f=webp&w=256',
    description: 'ESLint module for Nuxt, helps you find and fix problems in your JavaScript code.',
    link: 'https://nuxt.com/modules/eslint',
  },

  {
    name: 'trpc',
    image: 'https://trpc.io/img/logo.svg',

    description: 'tRPC allows you to easily build & consume fully typesafe APIs without schemas or code generation.',
    link: 'https://trpc.io/',
  },
  {
    name: 'TypeScript',
    image: 'https://imgs.search.brave.com/sXYprDxK8_0Up5vaW62rpLfRGZ5J1rxgZsxrNEMqUes/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL1R5cGVzY3Jp/cHRfbG9nb18yMDIw/LnN2Zw.svg',
    description: ' TypeScript speeds up your development experience by catching errors and providing fixes before you even run your code.',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'VueUse',
    image: 'https://raw.githubusercontent.com/nuxt/modules/main/icons/vueuse.svg',
    description: 'Collection of Vue Composition Utilities based on Composition API.',
    link: '',
  },
  {
    name: 'Nuxt Tailwind',
    image: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
    description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.',
    link: 'https://nuxt.com/modules/tailwindcss',
  },
  {
    name: 'Daisy UI',
    image: 'https://daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png',
    description: 'daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever.',
    link: 'https://daisyui.com/',
  },
  {
    name: 'Nuxt Icons',
    image: 'https://ipx.nuxt.com/s_80,f_auto/gh/nuxt/modules/main/icons/nuxt-icon.png',
    description: 'Icon module for Nuxt with 100,000+ ready to use icons from Iconify.',
    link: 'https://nuxt.com/modules/icon',
  },
  {
    name: 'authjs-nuxt',
    image: 'https://authjs.dev/img/logo/logo-sm.webp',
    description: 'Auth.js authentication Nuxt module. Edge compatible',
    link: 'https://nuxt.com/modules/authjs',
  },
  {
    name: 'Auto-Animate',
    image: 'https://raw.githubusercontent.com/nuxt/modules/main/icons/auto-animate.svg',
    description: 'Automatic animations for your Nuxt app with a single line of code. Triggered when Elements are Added, Removed or Changed to the DOM.',
    link: 'https://nuxt.com/modules/authjs',
  },
]
</script>

<template>
  <section class="px-20">
    <SectionHeader title="Features" subtitle="Empowering Your Web Experience with Amazing  Development Technologies" />
    <div class="gap-4 grid  space-y-4 lg:space-y-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="p in plugins" :key="p.name" ref="itemRefs" v-motion-fade-visible :delay="100" :href="p.link"
        target="_blank" class="feature-link"
      >
        <div class="p-4 card bg-neutral shadow-xl h-full hover:bg-[hsl(var(--nf))] duration-300 ease-linear group">
          <div v-motion-pop-visible :delay="100" class="flex justify-start mb-4">
            <NuxtImg :src="p.image" :modifiers="{ grayscale: true, tint: '#00DC82' }" :alt="p.name" class="w-16 h-16 rounded-md group-hover:scale-125 group-hover:-translate-x-4 group-hover:-translate-y-4" />

          </div>
          <div class="flex flex-col space-y-2 text-start">
            <p v-motion-pop-visible :delay="100" class="text-neutral-content font-bold">{{ p.name }}</p>
            <p v-motion-pop-visible :delay="100" class="text-neutral-content">{{ p.description }}</p>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
