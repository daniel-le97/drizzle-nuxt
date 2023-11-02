<script setup lang="ts">
const { $client } = useNuxtApp()

const { data: authors } = useAsyncData('authors', () => {
    return $client.getBooks.query()
})

const handleDelete = async (id: string): Promise<void> => {
    await $client.deleteBook.mutate({ id })

    refreshNuxtData('authors').catch((error) => {
      console.error('Could not refresh the "authors" cache')
      console.error(error)
    })
}


</script>

<template>
    <main class="p-8 flex flex-wrap items-start justify-center gap-8">

            <section>
              <h1 class="mb-8 font-bold text-xl">Authors</h1>
              <table class="table bg-white min-w-[300px]">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="author in authors" :key="author.id">
                  <td>{{ author.id }}</td>
                  <td>{{ author.firstName }}</td>
                  <td>{{ author.lastName }}</td>
                  <td>
                    <button @click="() => handleDelete(author.id)">
                      <Icon name="ph:trash" size="18" />
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </section>

        <section class="">
            <h2 class="text-lg font-semibold mb-4 relative -top-2">Add author</h2>
            <AuthorForm />
        </section>
    </main>
</template>
