<script setup lang="ts">
const { $client } = useNuxtApp()

const { data: books } = useAsyncData('books', () => {
    return $client.getBooks.query()
})

const handleDelete = async (id: string): Promise<void> => {
    await $client.deleteBook.mutate({ id })

    refreshNuxtData('books').catch((error) => {
      console.error('Could not refresh the "books" cache')
      console.error(error)
    })
}

</script>

<template>
    <main class="p-8 flex flex-wrap items-start justify-center gap-8">

            <section>
              <h1 class="mb-8 font-bold text-xl">Books</h1>
              <table class="table bg-white min-w-[300px]">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="book in books" :key="book.id">
                  <td>{{ book.id }}</td>
                  <td>{{ book.title }}</td>
                  <td>
                    <button @click="() => handleDelete(book.id)">
                      <Icon name="ph:trash" size="18" />
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </section>

        <section class="">
            <h2 class="text-lg font-semibold mb-4 relative -top-2">Add book</h2>
            <BookForm />
        </section>
    </main>
</template>