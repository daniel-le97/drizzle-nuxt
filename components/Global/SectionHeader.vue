<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string | ''
}>()

const { title, subtitle } = toRefs(props)
</script>

<template>
  <div class=" my-8 lg:my-20     bg-red-500  text-center">
    <div class="font-bold mb-6  justify-center flex items-center lg:text-6xl md:text-5xl text-4xl ">
      {{ title }}
    </div>
    <div class=" w-2/3  text-base-content opacity-80 text-2xl ">
      {{ subtitle }}
    </div>
  </div>
</template>

<style>

</style>
