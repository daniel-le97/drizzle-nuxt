<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle:string | ''
}>()

const { title,subtitle } = toRefs(props)
</script>

<template>
<div class=" mb-8 lg:mb-20">
    <div class="font-bold mb-6 gradient-text justify-center flex items-center lg:text-6xl md:text-5xl text-4xl ">
      {{ title }}
    </div>
      <div class=" text-base-content justify-center flex items-center ">
        {{ subtitle }}
      </div>

</div>
</template>

<style>

</style>
