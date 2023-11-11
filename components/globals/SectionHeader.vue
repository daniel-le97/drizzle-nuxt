<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
}>()

const { title, subtitle } = props
</script>

<template>
  <div v-motion-pop-visible class="  my-8 lg:my-20    flex-center   text-center">
    <h1 class="   title   text-base-content   ">
      {{ title }}
    </h1>
    <h2 class=" subtitle text-secondary  ">
      {{ subtitle }}
    </h2>
  </div>
</template>

<style scoped>
.title{
@apply drop-shadow-md  lg:text-6xl md:text-5xl text-4xl font-bold mb-6 font-serif
}
.subtitle{
  @apply opacity-80 text-2xl font-semibold px-44
}
</style>
