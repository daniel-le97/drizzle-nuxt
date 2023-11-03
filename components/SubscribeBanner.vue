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
  <div class="flex flex-col ">
    <!-- Form on the left -->
    <div class="  p-2">
      <h2 class="text-2xl font-semibold mb-4">
        Subscribe to our Newsletter
      </h2>

      <form @submit.prevent="subscribe">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="w-full p-2 border rounded-md input input-ghost"
            required
          >
        </div>

        <button type="submit" class="btn btn-ghost">
          Subscribe
        </button>
      </form>
    </div>
  </div>
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
