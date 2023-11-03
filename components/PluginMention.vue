<template>
  <div class="card glass w-full p-4 shadow-md text-center flex items-center justify-center">
    <div class="card-title">Plugins</div>
    <div class="card-body flex-row space-x-4 items-center justify-around">
      <div class="p-1" v-for="i in plugins">{{ i.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const plugins = [
  {
    name: "ESLINT",
  },

  {
    name: "TPCR",
  },
  {
    name: "TypeScript",
  },
  {
    name: "VueUse",
  },
  {
    name: "ColorMode",
  },
  {
    name: "Nuxt Icons",
  },
];
</script>

<style></style>
