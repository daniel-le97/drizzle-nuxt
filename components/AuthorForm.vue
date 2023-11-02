<script setup lang="ts">
const { $client } = useNuxtApp()

const initialState = {
  id: '',
  firstName: '',
  lastName: ''
}

const input = reactive({ ...initialState })


const handleSubmit = async (e: Event) => {
  e.preventDefault()

  await $client.insertAuthor.mutate(input)

  // Return form to original state
  Object.assign(input, initialState)

  refreshNuxtData('authors')

}
</script>

<template>
  <form @submit="handleSubmit" class="grid grid-cols-12 gap-x-4">
    <TextInput label="Firstname" v-model="input.firstName" class="col-span-6"/>

    <TextInput label="Lastname" v-model="input.lastName" class="col-span-6"/>

    <div class="mt-4 col-span-12 flex">
      <button type="submit" class="px-3 py-1 rounded-lg bg-slate-600">Save</button>
    </div>
  </form>
</template>