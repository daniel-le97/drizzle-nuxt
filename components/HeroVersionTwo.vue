<script setup lang="ts">

</script>

<template>
  <div class=" min-h-screen relative pt-16">

    <div v-motion-fade-visible class="hero-content text-center">
      <div
        class="mx-auto text-center flex flex-col items-center justify-center w-2/3"
      >
           <div  v-motion-fade class="blob  " >

        </div>
        <h1
          class="gradient-text font-primary text-center font-extrabold  text-4xl md:text-6xl sm:text-5xl lg:text-8xl"
        >
          Nuxt <span class="text-base-content"> With a</span> Drizzle <span class="text-base-content"> of</span> Tailwind
        </h1>
        <p class="hero-subtitle text-base-content ">
          Start off with some of the best features of this stack.
        </p>
      </div>


    </div>

  <a href="https://github.com/daniel-le97/drizzle-nuxt" target="_blank">
      <Icon
        v-motion
        :initial="{
          scale: 1,
          rotate: -25,
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
        name="uil:github" size="80" class="text-black cursor-pointer  absolute bottom-3 right-6 -rotate-45 p-0 m-0  "
      />
  </a>
  </div>
</template>

<style scoped>


.hero {
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=1311&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);

  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;

}

.hero-subtitle{
  @apply   drop-shadow-md lg:text-5xl text-2xl md:text-3xl font-bold  mt-4
}




.blob {
    display: block;
    position: relative;
    width: 500px;
    height: 500px;
    overflow: hidden;
    border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
    background-image: linear-gradient(
    to bottom right,
    hsl(var(--s)) 0%,
    hsl(var(--sf)) 9%,
    hsl(var(--pf)) 42%,
    hsl(var(--p)) 47%,
    hsl(var(--a)) 100%
  );
    background-size: 500% 100%;
    animation:
        blobber 30s 0s linear infinite,
        cobler 30s 0s linear infinite alternate;

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        background-color: #000;
        background-image: url(https://api.iconify.design/logos:nuxt-icon.svg?color=%23a00e0e);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        animation:
            blobber 30s 0s ease-in-out infinite,
            wobbler 15s 0s linear infinite alternate;
    }
}

@keyframes blobber {
    0%  { border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%; }
    5%  { border-radius: 48% 52% 41% 59% / 66% 37% 63% 34%; }
    10% { border-radius: 69% 31% 71% 29% / 67% 31% 69% 33%; }
    15% { border-radius: 60% 40% 71% 29% / 63% 65% 35% 37%; }
    20% { border-radius: 61% 39% 51% 49% / 57% 58% 42% 43%; }
    25% { border-radius: 66% 34% 25% 75% / 47% 30% 70% 53%; }
    30% { border-radius: 32% 68% 38% 62% / 65% 60% 40% 35%; }
    35% { border-radius: 63% 37% 41% 59% / 35% 38% 62% 65%; }
    40% { border-radius: 57% 43% 49% 51% / 55% 71% 29% 45%; }
    45% { border-radius: 47% 53% 34% 66% / 65% 36% 64% 35%; }
    50% { border-radius: 44% 56% 32% 68% / 69% 26% 74% 31%; }
    55% { border-radius: 28% 72% 37% 63% / 71% 44% 56% 29%; }
    60% { border-radius: 38% 62% 35% 65% / 74% 53% 47% 26%; }
    65% { border-radius: 73% 27% 46% 54% / 54% 47% 53% 46%; }
    70% { border-radius: 75% 25% 47% 53% / 49% 53% 47% 51%; }
    75% { border-radius: 62% 38% 43% 57% / 55% 60% 40% 45%; }
    80% { border-radius: 41% 59% 65% 35% / 73% 50% 50% 27%; }
    85% { border-radius: 55% 45% 57% 43% / 73% 61% 39% 27%; }
    90% { border-radius: 74% 26% 33% 67% / 40% 65% 35% 60%; }
    95% { border-radius: 58% 42% 57% 43% / 53% 45% 55% 47%; }
    100%{ border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%; }
}

@keyframes cobler {
	0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 100% 0%;
    }
}

@keyframes wobbler {
    0%  {
        transform: rotateZ(8deg);
    }
    100% {
        transform: rotateZ(-8deg);
    }
}


</style>
