<script setup lang="ts">
const { signIn, signOut, session, status, cookies } = useAuth()
</script>

<template>
  <div class="pt-24">
    <div class="flex justify-between">
      <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a>
      <button @click="signIn()">
        JS Sign In
      </button>
      <button @click="signOut()">
        Sign Out
      </button>
    </div>
    <div>
      <pre>{{ status }}</pre>
      <pre>{{ session?.user }}</pre>
      <pre>{{ cookies }}</pre>
    </div>
  </div>
</template>
