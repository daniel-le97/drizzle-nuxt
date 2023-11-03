<template>
  <div class="flex flex-col items-center md:flex-row md:justify-center md:items-start space-y-4 md:space-y-0">
    <!-- Image on the right (visible on larger screens) -->
    <div class="hidden md:block">
      <img src="https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=1311&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Subscription Image" class="object-cover w-48 h-48 rounded-md shadow-lg mask mask-parallelogram-3" />
    </div>

    <!-- Form on the left -->
    <div class="max-w-md  bg-white shadow-lg rounded-md">
      <h2 class="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>

      <form @submit.prevent="subscribe">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
          Subscribe
        </button>
      </form>
    </div>
        <div class="hidden md:block">
      <img src="https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=1311&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Subscription Image" class="object-cover w-48 h-48 rounded-md shadow-lg mask mask-parallelogram-4" />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscribe() {
      // Handle the subscription logic here
      console.log('Subscribed with email:', this.email);
      // You can send a request to your backend or perform other actions
    },
  },
};
</script>


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
