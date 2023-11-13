<script setup>
import { ref } from 'vue';

const blob = ref(null);
const blob2 = ref(null)
const glow = ref(null);
const blobBorderRadius = ref('30% 70% 61% 39% / 24% 25% 75% 76%');
const showGlow = ref(false);
const glowStyle = reactive({
  top: 0,
  left: 0,
});

function getRandomPercentage() {
  return Math.floor(Math.random() * 50) + 25 + '%';
}

function transformBorderRadius() {
  const randomBorderRadius = `${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()} / ${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()}`;
  blob.value.style.borderRadius = randomBorderRadius;
  blobBorderRadius.value = randomBorderRadius;
}
function addGlow() {
  showGlow.value = true;
}

function removeGlow() {
  showGlow.value = false;
}


onMounted(() => {
  transformBorderRadius(); // Initial transformation
  setInterval(transformBorderRadius, 1200); // Execute every 3 seconds
});
</script>

<template>
  <div class=" hero pt-24 parent-container  ">

 <div class="absolute top-24 right-4">


 </div>



  </div>
</template>

<style scoped>





</style>
<!-- bg-gradient-to-br from-primary to-secondary -->
