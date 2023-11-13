
<script setup lang="ts">
const { signIn, signOut, session } = useAuth()
</script>
<template>
  <div class="flex flex-col items-center  ">
    <NuxtImg src="https://authjs.dev/img/logo/logo-sm.webp" class="lg:w-32 w-24 drop-shadow-md " />
    <ul class=" mt-5  rounded-box space-y-3 ">
      <li class="my-6 ">
        <a href="/api/auth/signin" class="mx-auto   text-xl  btn btn-ghost   ">
          Native Link Sign in
        </a>
      </li>
      <li>
        <button class="btn btn-circle w-full    " @click="signIn('google')">
          <span>Sign In with Google</span>
          <Icon name="logos:google-icon" class="text-2xl" />
        </button>
      </li>
      <div class="divider">or</div>
      <li>
        <button class="btn btn-circle w-full" @click="signIn('github')">
          <span>Sign In with Github</span>
          <Icon name="logos:github-octocat" class="text-2xl" />
        </button>
      </li>
      <li v-if="session" class="mx-auto">
        <div class="tooltip" data-tip="Logout">
          <button class="p-0 m-0 rounded-full w-fit" @click="signOut()">
            <Icon name="uil:signout" class="text-5xl" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style></style>
