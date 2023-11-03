<script setup lang="ts">
const { $client } = useNuxtApp()

const initialState = {
  id: '',
  title: undefined,
}

const input = reactive({ ...initialState })

async function handleSubmit(e: Event) {
  e.preventDefault()

  await $client.insertBook.mutate(input)

  // Return form to original state
  Object.assign(input, initialState)

  refreshNuxtData('books')
}
</script>

<template>
  <form class="grid grid-cols-12 gap-x-4" @submit="handleSubmit">
    <TextInput v-model="input.title" label="Title" class="col-span-6" />

    <div class="col-span-6">
      <label for="author" class="block mb-1 text-sm">Author</label>
      <select
        id="author" v-model="input.id"
        class="rounded-lg border-2 border-base-dark outline-primary-300 p-1 w-full min-w-xs"
      >
        <option v-for="author in authors" :value="author.id">
          {{ author.firstName }} {{ author.lastName }}
        </option>
      </select>
    </div>

    <div class="mt-4 col-span-12 flex">
      <button type="submit" class="px-3 py-1 rounded-lg bg-slate-600">
        Save
      </button>
    </div>
  </form>
</template>
