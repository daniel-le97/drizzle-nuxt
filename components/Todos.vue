<script setup lang="ts">
const { $client } = useNuxtApp()
const {data: todos} = await $client.todos.getAll.useQuery()
</script>

<template>
  <div class="p-5 gradient-text" >
    all todos
    <div>{{ todos ?? [] }}</div>
  </div>
</template>

<style>

</style>
