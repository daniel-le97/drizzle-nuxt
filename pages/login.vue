<script setup lang="ts">
import SectionHeader from '~/components/Global/SectionHeader.vue';

const { signIn, signOut, session } = useAuth()
definePageMeta({ middleware: "guest-only" })
</script>

<template>
  <main
    class="p-10 w-full flex flex-col items-center justify-center "
  >
  <SectionHeader title="LOGIN WITH GITHUB" subtitle="This is a guest-only protected route, once authenticated users will be unable to reach this until you sign out."/>

    <div class="flex flex-col items-center  w-2/3 ">

      <ul class="menu  rounded-box ">
        <li class="my-6 ">
<p  class=" flex items-center justify-center">Native Link Sign in</p>
             <a href="/api/auth/signin" class="mx-auto  w-full text-xl btn  ">Https://yourWebsite.com/api/auth/signin


            </a>
        </li>
        <li v-if="!session" class="mx-auto">
          <button class="p-0 m-0 rounded-full w-fit" @click="signIn('github')">
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


<style>



</style>
