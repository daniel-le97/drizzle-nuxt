<script setup lang="ts">

import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="  min-h-screen">

<NavBar/>
    <div class="min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>
