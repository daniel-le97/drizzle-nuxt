<script setup lang="ts">
import SectionHeader from './globals/SectionHeader.vue'

const { data: todos, refresh } = await useFetch('/api/todos')


// Create a ref for a new todo item
const todo = ref({
  completed: false,
  userId: '5f235168-e290-4f80-b046-5d38988cd43d',
  task: '',
})


const handleSubmit = async () => {
  try {
    // IN THIS CASE USE $fetch instead of useFetch After initializing useFetch, you pass the reactive form as body. When updating it, the fetch all will be executed again. With $fetch, this does not happen.
    await $fetch('/api/todos/post', {
      method: 'post', body: todo.value
    })

todo.value.task = ''

    refresh()

  } catch (error) {
    console.log(error)
  }
}

// Mark a todo as completed
async function handleCompleted(todo:any): Promise<void> {
  try {
    todo.completed = !todo.completed
     await $fetch('/api/todos/index.update', {
      method: 'PUT',
      body: todo
    })
refresh()
  }
  catch (error) {

    console.log(error)
  }
}

// Delete a todo
async function handleDelete(id: string): Promise<void> {
  try {


    await useFetch('/api/todos/:id', { method: 'DELETE', body: { id } })

    refresh()
  }
  catch (error) {
    console.log(error)
  }
}

const randomize = () => todos?.value?.sort(() => Math.random() - 0.5)
</script>

<template>
  <div class="flex items-center justify-center">
    <SectionHeader title="TODO"
      subtitle="Check out this component that is utilziing the Basic usage of Drizzle and tRPC routes. Connect your db string and start adding!" />
  </div>
  <div class=" card bg-neutral text-neutral-content p-5   lg:w-1/2 ">
    <div class="flex justify-between">
      <Icon name="uil:sun" size="30" />
    </div>
    <form class="flex mx-auto  w-2/3" @submit.prevent="handleSubmit">
      <div class="form-control w-full">
        <div class="input-group">
          <input v-model="todo.task" type="text" placeholder="New Task" class="input text-base-content w-full ">
          <button type="submit" class="btn btn-square" :disabled="todo.task.length <= 2">
            Add
          </button>
        </div>
        <span v-if="todo.task.length <= 2" class=" p-2  text-center text-error text-xs">* Must be at least 3 characters
          long.</span>
      </div>
    </form>
    <div v-if="todos?.length > 1" class="flex space-x-4 my-5 items-center justify-center">
      <button class="btn btn-sm bg-accent outline border-none" @click="randomize">
        RANDOMIZE
      </button>
    </div>
    <div v-if="todos?.length > 0" v-auto-animate class="pt-5 h-96 pr-4 overflow-y-scroll">
      <div v-for="t in todos" :key="t.id" class="py-2">
        <div class="px-3  bg-primary rounded-md flex justify-between">
          <div class="flex items-center justify-center space-x-3">
            <div class="form-control">
              <input type="checkbox" :checked="t.completed !== null ? t.completed : false" class="checkbox bg-accent "
                @change="handleCompleted(t)">
            </div>
            <div class="text-primary-content">
              {{ t.task }}
            </div>
          </div>
          <div class="flex space-x-4 items-center justify-center">
            <div class=" text-primary-content text-xs">
              {{ new Date(t.createdAt!).toLocaleTimeString() }}
            </div>
            <button class="btn btn-ghost btn-circle p-1" @click="handleDelete(t.id)">
              <Icon name="uil:x" size="25" class="text-primary-content" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else v-motion-pop-visible class=" flex flex-col items-center justify-center space-y-6">
      <div class="text-4xl">
        NO Current Tasks
      </div>
      <progress class="progress progress-accent  w-full" />
    </div>
  </div>
</template>

<style scoped></style>
