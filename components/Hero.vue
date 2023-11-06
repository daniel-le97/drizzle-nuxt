<script setup lang="ts">

</script>

<template>
  <div class="hero min-h-screen relative">

    <div v-motion-pop-visible class="hero-content text-center">
      <div
        class="mx-auto text-center flex flex-col items-center justify-center w-2/3"
      >
        <h1
          class="gradient-text text-center font-extrabold tracking-tight text-4xl md:text-6xl sm:text-5xl lg:text-8xl"
        >
          Nuxt Drizzle Made Beautiful with Tailwind
        </h1>
        <p class="lg:text-5xl text-2xl md:text-3xl font-bold  mt-4 text-base-100">
          Simplify Development
        </p>
      </div>
    </div>

    <Icon
    v-motion
    :initial="{
      scale: 1,
      rotate:-25
    }"
    :enter="{
      rotate: 25,
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        type: 'spring',
        stiffness: 150,
        damping: 45,
        mass: 1,
      },
    }"
     name="uil:github" size="80" class="text-black cursor-pointer  absolute bottom-3 right-6 -rotate-45 p-0 m-0  " />
  </div>
</template>

<style scoped>
.hero {
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=1311&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);

  background-position: top;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

</style>
