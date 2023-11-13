<script setup lang="ts"></script>

<template>
  <main class=" text-base-content pt-16 ">

  <div class="hero " style="background-image: url(https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
    <div class="hero-overlay bg-opacity-20"></div>

<div v-motion-fade-visible :delay="200"   class="hero-inner-border"></div>

    <div v-motion-fade-visible :delay="200"  class="hero-content  text-center text-neutral-content ">
      <div class="lg:max-w-lg max-w-sm drop-shadow-md">
        <h1 class="mb-5   text-5xl lg:text-8xl font-bold ">Hello there</h1>
        <p class="mb-5 ">
          We appreciate you taking the time to check out this project. i hope you like it and if so check it out on github and clone it!
        </p>

<a href="https://github.com/daniel-le97/drizzle-nuxt" class="link text-2xl">
   Github
</a>


      </div>
    </div>
  </div>


    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col items-center justify-center">
      <div class="font-bold text-accent text-xl uppercase">
        Contact
      </div>
      <div class="mb-4 text-6xl tracking-tight font-extrabold text-center">
        Let's Connect!
      </div>
      <p class="mb-8 lg:mb-16  opacity-80 text-center sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know, our support team is delighted to help you.
      </p>
      <div class="card  p-10 bg-neutral text-neutral-content">
        <form action="#" class="space-y-8 ">
          <div class="flex space-x-8   justify-between">
            <div class="flex flex-col space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                <input id="email" type="email" class="input  text-base-content" placeholder="name@flowbite.com" required>
              </div>
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium">Subject</label>
                <input id="subject" type="text" class="input text-base-content" placeholder="Let us know how we can help you" required>
              </div>
            </div>

            <div class="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1610051400050-e03bee86e2ff?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="lg:w-2/3  lg:block hidden">
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium">Your message</label>
            <textarea id="message" rows="6" cols="100" class="textarea text-base-content" placeholder="Leave a comment..." />
          </div>
          <button type="submit" class="btn btn-warning">
            Send message
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
