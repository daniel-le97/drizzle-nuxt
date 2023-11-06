<script setup lang="ts">
const { signIn, signOut, session, status } = useAuth()
definePageMeta({ middleware: "guest-only" })
</script>

<template>
  <main
    class="p-10 w-full flex flex-col items-center justify-center "
  >
  <SectionHeader title="LOGIN WITH GITHUB" subtitle="This is a guest-only protected route, once authenticated will be unable to reach this until you sign out."/>
    <div class="flex flex-col items-center card glass w-2/3 ">
      <div class="text-6xl font-bold p-2">
        Login
      </div>
      <ul class="menu w-56 rounded-box ">
        <li class="my-6">
          <a href="/api/auth/signin" class="mx-auto ">Native Link Sign in</a>
        </li>
        <li v-if="!session" class="mx-auto">
          <button class="p-0 m-0 rounded-full w-fit" @click="signIn()">
            <Icon name="uil:github" class="text-8xl" />
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


  </main>
</template>
