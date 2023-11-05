<script setup lang="ts">
const isvisible = ref(false)
onMounted(() => {
  isvisible.value = !isvisible.value
})
</script>

<template>
  <div class="hero min-h-screen relative">
    <!-- <div class="hero-overlay"></div> -->
    <Transition name="slide-fade">
      <div v-if="isvisible" class="hero-content text-center">
        <div
          class="mx-auto text-center flex flex-col items-center justify-center w-2/3"
        >
          <h1
            class="gradient-text text-center font-extrabold tracking-tight text-6xl"
          >
            Nuxt Drizzle Made Beautiful with Tailwind
          </h1>
          <p class="text-lg font-bold  mt-4 text-base-100">
            Simplify Development
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
.hero {
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=1311&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);

  background-position: top;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
