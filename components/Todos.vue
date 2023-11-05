<script setup lang="ts">
const { $client } = useNuxtApp()
const { data: todos } = await $client.todos.getAll.useQuery()


const todo = ref({
  completed: false,
  userId: '5f235168-e290-4f80-b046-5d38988cd43d',
})

async function handleSubmit() {
  try {
    const logs = await $client.todos.insertTodo.mutate(todo.value)
    console.log(logs)
  }
  catch (error) {
    console.log(error.message);
    
  }
}

async function handleCompleted(completed: boolean) {
  try {
    if (window.confirm('Are You Sure')) {
      completed = !completed
      console.log(completed)
    }
  }
  catch (error) {

  }
}

async function handleDelete(id: string) {
  try {
    if (window.confirm('Are You Sure'))
      await $client.todos.deleteTodo.mutate({ id })

    todos.value = todos.value?.filter(t => t.id !== id)
  }
  catch (error) {

  }
}
</script>

<template>
  <div


  class=" card bg-neutral text-neutral-content p-5   w-1/2 ">
    <div class="flex justify-between">
      <div class="font-bold text-xl">
        Todos
      </div>
      <Icon name="uil:sun" size="30"      v-motion
      :initial="{

        rotate:0
      }"
      :enter="{

        rotate:100,

        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          stiffness: 150,
          damping: 40,
          mass: 0.5,
        },

      }"  />
    </div>
    <!-- <div>{{ todos ?? [] }}</div> -->
    <form class="flex mx-auto mt-5" @submit.prevent="handleSubmit">
      <div class="form-control">
        <div class="input-group">
          <input v-model="todo.task" type="text" placeholder="New Task" class="input input-bordered">
          <button class="btn btn-square">
            Add
          </button>
        </div>
      </div>
    </form>
    <div class="pt-5">
      <div
        v-for="t in todos"
        :key="t.id"
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }" :enter="{
          opacity: 1,
          y: 0,
        }" :leave="{
          y: -100,
          opacity: 0,
        }" class="py-2"
      >
        <div class="p-2  bg-secondary rounded-md flex justify-between">
          <div class="flex items-center justify-center space-x-3">
            <div class="form-control">
              <input
                type="checkbox" :checked="t.completed !== null ? t.completed : false"
                class="checkbox bg-accent" @change="handleCompleted(t.completed !== null ? t.completed : false)"
              >
            </div>
            <div class="">
              {{ t.task }}
            </div>
          </div>
          <button class="btn btn-ghost btn-circle" @click="handleDelete(t.id)">
            <Icon name="uil:x" size="30" class="text-error" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
