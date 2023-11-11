<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt Drizzle Template',
  ogTitle: 'Nuxt Drizzle Template',
  description: 'A Template for Nuxt, Drizzle and Tailwind',
  ogDescription: 'A Template for Nuxt, Drizzle and Tailwind',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :height="4" color="red" class="z-50" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
