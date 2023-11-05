<script setup lang="ts">
const { $client } = useNuxtApp()
const { data: todos } = await $client.todos.getAll.useQuery()

const todo = ref({
  task: '',
  completed: false,

})

const handleSubmit = async () => {
  try {
    console.log(todo.value.task);
    await $client.todos.insertTodo.mutate(todo.value)
  } catch (error) {

  }
}


const handleCompleted = async (completed:boolean)=>{
  try {
completed = !completed
console.log(completed);

  } catch (error) {

  }
}

const handleDelete = async () =>{
try {
console.log('deleted');

} catch (error) {

}
}

</script>

<template>
  <div class=" card bg-neutral text-neutral-content p-5   w-1/2 ">
    <div class="flex justify-between">
      <div class="font-bold text-xl">
        Todos
      </div>
      <Icon name="uil:sun" size="30" />
    </div>
    <!-- <div>{{ todos ?? [] }}</div> -->
    <form @submit.prevent="handleSubmit" class="flex mx-auto mt-5">
      <div class="form-control">
        <div class="input-group">
          <input type="text" v-model="todo.task" placeholder="New Task" class="input input-bordered" />
          <button class="btn btn-square">
            Add
          </button>
        </div>
      </div>
    </form>




    <div v-for="t in todos" :key="t.id" class="py-2">
      <div class="p-2  bg-secondary rounded-md flex justify-between">
        <div class="flex items-center justify-center space-x-3">
          <div class="form-control">
            <input @change="handleCompleted(t.completed)" type="checkbox" :value="t.completed" class="checkbox bg-accent" />
          </div>
          <div class="">
            {{ t.task }}
          </div>
        </div>
        <button class="btn btn-ghost btn-circle" @click="handleDelete">
          <Icon name="uil:x" size="30" class="text-error" />
        </button>
      </div>
    </div>
    
  </div>
</template>

<style></style>
