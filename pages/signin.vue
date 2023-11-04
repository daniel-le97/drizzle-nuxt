<script setup lang="ts">
const { signIn, signOut, session, status, cookies } = useAuth()
</script>

<template>
  <main
    class="p-10 w-full flex flex-col items-center justify-center "
  >
    <div class="flex flex-col items-center card glass w-2/3 ">
      <div class="text-6xl font-bold p-2">Login</div>
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

    <!-- //ANCHOR -  AUTHENTICATED USER  -->
    <div
      v-if="session"
      class="mt-10 p-10 card glass flex flex-wrap items-center justify-center"
    >
      <div class="avatar">
        <div class="w-24 mask mask-hexagon">
          <img :src="session?.user?.image ?? ''" :alt="session?.user?.name?? ''">
        </div>
      </div>

      <ul class="menu w-56 rounded-box">
        <li class="btn btn-ghost">
          {{ session?.user?.email }}
        </li>
        <li class="btn btn-ghost">
          {{ session?.user?.name }}
        </li>
      </ul>

      <div class="btn btn-ghost mb-4 text-xl">
        {{ status }}
      </div>
    </div>
      <!-- //ANCHOR -  AUTHENTICATED USER  -->
    <div
      v-else
      class="p-10 mt-20 card glass flex flex-wrap items-center justify-center"
    >
     <div class="btn btn-ghost mb-4 text-xl">
        {{ status }}
      </div>

      <div class="avatar">
        <div class="w-24 mask mask-hexagon">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1699040982~exp=1699041582~hmac=b530ae55be4c26bd548d06486921e5975545322afb3117750615d803386aea59"
          >
        </div>
      </div>
      <div>

      </div>
    </div>
  </main>
</template>
