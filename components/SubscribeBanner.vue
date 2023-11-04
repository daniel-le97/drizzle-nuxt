<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    subscribe() {
      // Handle the subscription logic here
      console.log('Subscribed with email:', this.email)
      // You can send a request to your backend or perform other actions
    },
  },
}
</script>

<template>
  <section class="flex flex-col items-center w-full">
    <!-- Form on the left -->
    <div class="  bg-white  rounded-md">
      <div class="text-4xl font-semibold mb-4">
        Subscribe to our Newsletter
      </div>

      <form @submit.prevent="subscribe">
        <div class="mb-4">
          <label for="email" class="label">Email Address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="input input-ghost"

            required
          >
        </div>

        <button type="submit" class="btn btn-accent">
          Subscribe
        </button>
      </form>
    </div>
  </section>
</template>

<style>
/* Define the rotation animation */
@keyframes rotateClockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Apply the animation to your component */
.rotate-animation {
  animation: rotateClockwise 10s linear infinite; /* Adjust the duration as needed */
}
</style>
