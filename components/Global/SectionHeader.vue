<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
}>()

const { title, subtitle } = props
</script>

<template>
  <div class="  my-8 lg:my-20   flex-center   text-center">
    <div class="primary-font  title  ">
      {{ title }}
    </div>
    <div class="   secondary-font   text-base-content  ">
      {{ subtitle }}
    </div>
  </div>
</template>

<style scoped>
.title{
@apply drop-shadow-md  lg:text-6xl md:text-5xl text-4xl font-bold mb-6
}
.subtitle{
  @apply opacity-80 text-2xl font-semibold px-44
}

</style>
