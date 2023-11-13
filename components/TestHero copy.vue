<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen hero pt-24 parent-container  ">
     <div class="hero-overlay bg-opacity-90"></div>
     <div class="blob-1 bg-gradient-to-br from-primary to-secondary "/>


  </div>
</template>

<style scoped>
.parent-container {
  position: relative;
  width: 100%; /* Adjust the size as needed */

  border: 1px solid #000; /* For visualization purposes */
  overflow: hidden;
}
.blob-1{
  z-index: 9999;
  width: 548px;
  height: 548px;

  border-radius: 30% 70% 61% 39% / 24% 25% 75% 76% ;
    animation: spin 40s linear infinite;
}


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
