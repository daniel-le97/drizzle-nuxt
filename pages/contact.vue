<script setup lang="ts"></script>

<template>
  <main class=" ">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">
        Contact Us
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
      </p>
      <form action="#" class="space-y-8">
        <div class="flex space-x-8   justify-between">
          <div class="flex flex-col space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
              <input id="email" type="email" class="input " placeholder="name@flowbite.com" required>
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium">Subject</label>
              <input id="subject" type="text" class="input" placeholder="Let us know how we can help you" required>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="w-2/3">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium">Your message</label>
          <textarea id="message" rows="6" cols="100" class="textarea" placeholder="Leave a comment..." />
        </div>
        <button type="submit" class="btn btn-warning">
          Send message
        </button>
      </form>
    </div>
  </main>
</template>
