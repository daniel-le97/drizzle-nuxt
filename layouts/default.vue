<script setup lang="ts">
import Footer from '~/components/globals/Footer.vue'
import NavBar from '~/components/NavBar/NavBar.vue'
</script>

<template>
  <NavBar />
  <div>
    <slot />
  </div>
  <Footer />
</template>
