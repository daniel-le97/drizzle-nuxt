<script setup lang="ts">
const { $client } = useNuxtApp()

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
}

const input = reactive({ ...initialState })

async function handleSubmit(e: Event) {
  e.preventDefault()

  await $client.insertAuthor.mutate(input)

  // Return form to original state
  Object.assign(input, initialState)

  refreshNuxtData('authors')
}
</script>

<template>
  <form class="grid grid-cols-12 gap-x-4" @submit="handleSubmit">
    <TextInput v-model="input.firstName" label="Firstname" class="col-span-6" />

    <TextInput v-model="input.lastName" label="Lastname" class="col-span-6" />

    <div class="mt-4 col-span-12 flex">
      <button type="submit" class="px-3 py-1 rounded-lg bg-slate-600">
        Save
      </button>
    </div>
  </form>
</template>
