<script setup lang="ts">
const { $client } = useNuxtApp()


const { data: hello } = await $client.todos.getAll.useQuery()
</script>

<template>
  <div>
    <p>{{ hello }}</p>
  </div>
</template>
