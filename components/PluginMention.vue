<script setup lang="ts">
const plugins = [
  {
    name: 'ESLINT',
  },

  {
    name: 'TPCR',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'VueUse',
  },
  {
    name: 'ColorMode',
  },
  {
    name: 'Nuxt Icons',
  },
  {
    name: 'authjs-nuxt',
  },
]
</script>

<template>
  <section class="my-44">
    <div
      class="card glass w-full p-4 shadow-md text-center flex items-center justify-center"
    >
      <div
        class="card-title absolute top-0 justify-center flex items-center text-4xl"
      >
        Plugins & Modules
      </div>
      <div class="card-body flex-row space-x-4 items-center justify-around">
        <div v-for="(i, index) in plugins" class="p-1 btn btn-ghost  bg-emerald-300" :class="`bg-green-${index}00`">
          {{ i.name }} {{ index }}
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
