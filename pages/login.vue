<script setup lang="ts">
import SectionHeader from '~/components/globals/SectionHeader.vue'

const { signIn, signOut, session } = useAuth()
// definePageMeta({ middleware: 'guest-only' })
</script>

<template>
  <main class="  pt-24 w-full flex flex-col items-center">
    <SectionHeader title="LOGIN" subtitle="" />
    <div class="flex flex-col items-center   lg:w-1/3  relative     z-50 shadow-md bg-base-200 p-10 rounded-md">
      <div class=" lg:absolute  -top-20">
        <NuxtImg src="https://authjs.dev/img/logo/logo-sm.webp" class="lg:w-32 w-24 drop-shadow-md " />
      </div>
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
    <!-- <div className="shape-blob -z-50"></div>
        <div className="shape-blob one -z-50"></div>
        <div className="shape-blob two -z-50"></div> -->
  </main>
</template>

<style scoped>
.shape-blob {
  background: rgb(99 102 241);
  height: 200px;
  width: 200px;
  border-radius: 30% 50% 20% 40%;
  animation: transform 20s ease-in-out infinite both alternate,
    movement_one 40s ease-in-out infinite both;
  opacity: 0.7;
  position: absolute;
  left: 70%;
  top: 50%;
}

.shape-blob.one {
  height: 500px;
  width: 500px;
  left: -200px;
  top: 250px;
  transform: rotate(-180deg);
  animation: transform 30s ease-in-out infinite both alternate,
    movement_two 60s ease-in-out infinite both;
}

.shape-blob.two {
  height: 350px;
  width: 350px;
  left: 500px;
  top: -150px;
  transform: rotate(-180deg);
  animation: transform 30s ease-in-out infinite both alternate,
    movement_two 60s ease-in-out infinite both;
}

@keyframes transform {

  0%,
  100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }

  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }

  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }

  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }

  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
}

@keyframes movement_one {

  0%,
  100% {
    transform: none;
  }

  50% {
    transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
  }
}

@keyframes movement_two {

  0%,
  500% {
    transform: none;
  }

  50% {
    transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
  }
}
</style>
