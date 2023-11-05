<script setup lang="ts">

import Footer from '~/components/Footer.vue'
</script>

<template>


<NavBar/>
    <div class="min-h-screen">
      <slot />
    </div>
    <Footer />
<!-- <AlertComponent type="alert-success" content="LOREM IPSUM MY FACE"/> -->
</template>
