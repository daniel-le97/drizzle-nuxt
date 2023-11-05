<script setup lang="ts">
const { $client } = useNuxtApp()
const {data: hello} = await $client.hello.useQuery({text: 'client'})
</script>

<template>
  <div class="p-5 gradient-text" >
    hello from trpc! {{ hello?.greeting }}
  </div>
</template>

<style>

</style>
