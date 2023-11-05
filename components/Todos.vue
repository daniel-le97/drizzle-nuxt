<script setup lang="ts">
const { $client } = useNuxtApp()
const { data: todos } = await useAsyncData('todos', () => $client.todos.getAll.query())
const isSortingCreatedAt = ref(true)
const isSortingCompleted = ref(true)


// await $client.todos.getAll.useQuery()


const todo = ref({
  completed: false,
  userId: '5f235168-e290-4f80-b046-5d38988cd43d',
})

async function handleSubmit() {
  try {
    const logs = await $client.todos.insertTodo.mutate(todo.value)

    refreshNuxtData('todos')
    // console.log(logs)
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

    refreshNuxtData('todos')
  }
  catch (error) {

  }
}

const sortCreatedAt = () => {
  if (isSortingCreatedAt.value) {
    todos.value?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else {
    todos.value?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  isSortingCreatedAt.value = !isSortingCreatedAt.value
};

const showAlert = ()=> {
  
}

const completedSort = () => {
  if (isSortingCompleted.value) {
    todos.value?.sort((a, b) => a.completed - b.completed);
  } else {
    todos.value?.sort((a, b) => b.completed - a.completed);
  }
  isSortingCompleted.value = !isSortingCompleted.value; // Toggle the sorting order
}

const randomize = () => todos.value.sort(() => Math.random() - 0.5);
</script>

<template>





<div class="flex items-center justify-center">
<button class="btn " @click="showAlert"> SHOW ALERT</button>

</div>



  <div class=" card bg-neutral text-neutral-content p-5   w-1/2 ">

    <div class="flex justify-between">
      <div class="font-bold text-xl">
        Todos
      </div>
      <Icon name="uil:sun" size="30" v-motion :initial="{

        rotate: 0
      }" :enter="{

  rotate: 100,

  transition: {
    repeat: Infinity,
    repeatType: 'mirror',
    stiffness: 150,
    damping: 40,
    mass: 0.5,
  },

}" />
    </div>
    <!-- <div>{{ todos ?? [] }}</div> -->
    <form class="flex mx-auto  w-2/3" @submit.prevent="handleSubmit">
      <div class="form-control w-full">
        <div class="input-group">
          <input v-model="todo.task" type="text" placeholder="New Task" class="input input-bordered w-full ">
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
        <button class="btn btn-sm bg-accent outline border-none" @click="sortCreatedAt">
          <label class="swap ">
            <input type="checkbox" />
            <div class="swap-on text-sm">CreatedAt
              <Icon name="uil:arrow-down" size="20" />
            </div>
            <div class="swap-off text-sm">CreatedAt
              <Icon name="uil:arrow-up" size="20" />
            </div>
          </label>
        </button>
        <button class="btn btn-sm bg-accent outline border-none" @click="completedSort">
        <label class="swap ">
              <input type="checkbox" />
              <div class="swap-on text-sm">Completed
                <Icon name="uil:arrow-down" size="20" />
              </div>
              <div class="swap-off text-sm">Completed
                <Icon name="uil:arrow-up" size="20" />
              </div>
            </label>
        </button>
      </div>
    <div class="pt-5 h-96 overflow-y-scroll" v-auto-animate>
      <div v-for="t in todos" :key="t.id" class="py-2">
        <div class="p-2  bg-primary rounded-md flex justify-between">
          <div class="flex items-center justify-center space-x-3">
            <div class="form-control">
              <input type="checkbox" :checked="t.completed !== null ? t.completed : false" class="checkbox bg-accent "
                @change="handleCompleted(t.completed !== null ? t.completed : false)">
            </div>
            <div class="text-primary-content">
              {{ t.task }}
            </div>
          </div>
          <div class="flex space-x-4 items-center justify-center">
            <div class="">{{ new Date(t.createdAt).toLocaleTimeString() }}</div>
            <button class="btn btn-ghost btn-circle" @click="handleDelete(t.id)">
              <Icon name="uil:x" size="30" class="text-primary-content" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
