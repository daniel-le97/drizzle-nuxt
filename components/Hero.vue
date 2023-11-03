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
          <p class="text-lg font-bold  mt-4">
            Simplify Development
          </p>
        </div>
      </div>
    </Transition>

    <HeroCards />
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.hero {
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=1311&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);

  background-position: top;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

.hero::before {
  content: "";
  position: absolute;
  bottom: 0;
  z-index: 10;
  left: 0;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(
    to bottom,
    var(--gradient-start, rgba(255, 255, 255, 0)),
    var(--gradient-end, #fff)
  );
  /* Adjust the default and dark mode gradient colors using CSS variables */
}

/* Define CSS variables for the gradient colors */
html.dark-mode {
  --gradient-start: rgba(0, 0, 0, 0); /* Dark mode start color */
  --gradient-end: #091a28; /* Dark mode end color */
}
</style>
