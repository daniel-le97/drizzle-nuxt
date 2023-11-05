<template>
    <div class="font-bold mb-20 gradient-text justify-center flex items-center text-6xl">
{{ title }}
      </div>
</template>

<script setup lang="ts">


const props = defineProps<{
  title: string,
}>();


const { title } = toRefs(props);
</script>


<style>

</style>
