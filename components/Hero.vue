<template>
  <div
    class="hero min-h-screen relative"
    style="
      background-image: url(https://images.unsplash.com/photo-1696789738783-0f972304597e?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    "
  >
    <div class="hero-overlay"></div>
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-7xl font-bold">Hello there</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>

     <!-- GLASS CARD -->
    <div class="absolute -bottom-44 w-2/3 flex justify-center">
      <div class="card w-full h-96 glass ">
        <div class="card-body text-center">
          <h2 class="text-5xl font-bold text-black"><span class="text-green-400">Nuxt</span> + <span class=" text-lime-300">Drizzle</span></h2>
          <div class="text-5xl font-bold text-center"> <span class=" text-teal-400">Tailwind</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>