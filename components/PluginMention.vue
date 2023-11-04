<script setup lang="ts">
const plugins = [
  {
    name: 'ESLINT',
image:'https://cdn.iconscout.com/icon/free/png-512/free-eslint-3521412-2944856.png?f=webp&w=256'
,
    description:'ESLint module for Nuxt, helps you find and fix problems in your JavaScript code.',
    link:'https://nuxt.com/modules/eslint'
  },

  {
    name: 'trpc',
       image:'https://trpc.io/img/logo.svg',

    description:'tRPC allows you to easily build & consume fully typesafe APIs without schemas or code generation.',
    link:'https://trpc.io/'
  },
  {
    name: 'TypeScript',
    image:'https://imgs.search.brave.com/sXYprDxK8_0Up5vaW62rpLfRGZ5J1rxgZsxrNEMqUes/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL1R5cGVzY3Jp/cHRfbG9nb18yMDIw/LnN2Zw.svg',
    description:'',
    link:''
  },
  {
    name: 'VueUse',
    image:'https://raw.githubusercontent.com/nuxt/modules/main/icons/vueuse.svg',
    description:'',
    link:''
  },
  {
    name: 'Nuxt Tailwind',
    image:'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
    description:'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.',
    link:'https://nuxt.com/modules/tailwindcss'
  },
  {
    name: 'Daisy UI',
    image:'https://daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png'
    ,
    description:'daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever.',
    link:'https://daisyui.com/'
  },
  {
    name: 'Nuxt Icons',
    image:'https://ipx.nuxt.com/s_80,f_auto/gh/nuxt/modules/main/icons/nuxt-icon.png'
    ,
    description:'Icon module for Nuxt with 100,000+ ready to use icons from Iconify.',
    link:'https://nuxt.com/modules/icon'
  },
  {
    name: 'authjs-nuxt',
    image:'https://authjs.dev/img/logo/logo-sm.webp'
    ,
    description:'Auth.js authentication Nuxt module. Edge compatible',
    link:'https://nuxt.com/modules/authjs'
  },
]
</script>

<template>
  <section class="my-44">
    <div
      class="font-bold mb-20  gradient-text  justify-center flex items-center text-6xl"
    >
      Plugins & Modules
    </div>
    <div class=" gap-4 grid grid-cols-2  ">
      <a :href="p.link" v-for="p in plugins" :key="p.name" target="_blank">
        <div  class="p-4 card bg-neutral  " >
<div class="flex justify-start">
      <img :src="p.image" :alt="p.name" class="w-16 h-16 rounded-md">
    </div>
    <div class="flex flex-col space-y-2 text-start">
      <p  class="text-base-100">{{p.name}}</p>
      <p class="text-info">{{p.description}}</p>
    </div>

  </div>
</a>
      </div>
  </section>
</template>

<style></style>
