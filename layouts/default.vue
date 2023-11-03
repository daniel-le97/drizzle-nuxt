<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="  min-h-screen">
    <!-- <header class="flex items-center justify-center border-b-2">
      <nav class="flex justify-center gap-8">
        <nuxt-link to="/" class="p-2">
          Authors
        </nuxt-link>
        <nuxt-link to="/books" class="p-2">
          Books
        </nuxt-link>
      </nav>
    </header> -->
    <NavBar />
    <div class="min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>
