<script setup lang="ts">
import SectionHeader from './Global/SectionHeader.vue';









// Get the Nuxt app context
const { $client } = useNuxtApp();

// Fetch the todos data using useAsyncData
const { data: todosData } = await useAsyncData('todos', () => $client.todos.getAll.query());

// Create a ref for todos data
const todos = ref(todosData);

// Create a ref for a new todo item
const todo = ref({
  completed: false,
  userId: '5f235168-e290-4f80-b046-5d38988cd43d',
  task: '',
});


// Handle the submission of a new todo
async function handleSubmit(): Promise<void> {
  try {
    // Insert the new todo using the API client
    await $client.todos.insertTodo.mutate(todo.value);

    // Refresh the data to update the list of todos
    refreshNuxtData('todos');

    // Clear the task input
    todo.value.task = '';
  } catch (error) {

    console.log(error);
  }
}

// Mark a todo as completed
async function handleCompleted(_id: string): Promise<void> {
  try {
    // Update the todo as completed using the API client
    await $client.todos.updateTodo.mutate({ id: _id });

    // Refresh the data to update the list of todos
    refreshNuxtData('todos');
  } catch (error) {
    console.log(error);
  }
}

// Delete a todo
async function handleDelete(id: string): Promise<void> {
  try {
    // Confirm the deletion with a user prompt
    if (window.confirm('Are You Sure')) {
      // Delete the todo using the API client
      await $client.todos.deleteTodo.mutate({ id });
    }

    // Refresh the data to update the list of todos
    refreshNuxtData('todos');
  } catch (error) {
    console.log(error);
  }
}




const randomize = () => todos?.value?.sort(() => Math.random() - 0.5)
</script>

<template>
  <div class="flex items-center justify-center">
    <SectionHeader
      title="TODO"
      subtitle="Check out this component that is utilziing the Basic usage of Drizzle and tRPC routes. Connect your db string and start adding!"
    />
  </div>
  <div class=" card bg-neutral text-neutral-content p-5   w-1/2 ">
    <div class="flex justify-between">
      <Icon name="uil:sun" size="30" />
    </div>

    <form class="flex mx-auto  w-2/3" @submit.prevent="handleSubmit">
      <div class="form-control w-full">
        <div class="input-group">
          <input v-model="todo.task" type="text" placeholder="New Task" class="input text-base-content w-full ">
          <button class="btn btn-square">
            Add
          </button>
        </div>
      </div>
    </form>
    <div class="flex space-x-4 my-5 items-center justify-center">
      <button class="btn btn-sm bg-accent outline border-none" @click="randomize">
        RANDOMIZE
      </button>

    </div>
    <div v-if="todos?.length > 0" v-auto-animate class="pt-5 h-96 overflow-y-scroll">
      <div v-for="t in todos" :key="t.id" class="py-2">
        <div class="p-2  bg-primary rounded-md flex justify-between">
          <div class="flex items-center justify-center space-x-3">
            <div class="form-control">
              <input
                type="checkbox" :checked="t.completed !== null ? t.completed : false" class="checkbox bg-accent "
                @change="handleCompleted(t.id)"
              >
            </div>
            <div class="text-primary-content">
              {{ t.task }}
            </div>
          </div>
          <div class="flex space-x-4 items-center justify-center">
            <div class="">
              {{ new Date(t.createdAt!).toLocaleTimeString() }}
            </div>
            <button class="btn btn-ghost btn-circle" @click="handleDelete(t.id)">
              <Icon name="uil:x" size="30" class="text-primary-content" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else v-motion-pop-visible class=" flex flex-col items-center justify-center space-y-6">
      <div class="text-4xl">
        NONE
      </div>
      <Icon name="uil:sad-crying" size="100" />
      <progress class="progress progress-accent  w-full" />
    </div>
  </div>
</template>

<style scoped>
</style>
