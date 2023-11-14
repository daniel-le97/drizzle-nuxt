<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
});

const { title, subtitle } = props;
</script>

<template>
  <div v-motion-fade-visible class="  my-8 lg:my-20  items-center flex flex-col   flex-center   text-center">
    <h1 class="  drop-shadow-md  lg:text-6xl md:text-5xl text-4xl font-bold mb-6 font-serif  text-base-content   ">
      {{ title }}
    </h1>
    <h2 class=" opacity-80 w-2/3   text-lg lg:text-2xl font-semibold text-secondary  ">
      {{ subtitle }}
    </h2>
  </div>
</template>

<style >

</style>
