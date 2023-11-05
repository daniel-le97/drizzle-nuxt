<script setup lang="ts">
const { session, signOut } = useAuth()
</script>

<template>
  <div class="dropdown dropdown-end">
    <label
      v-motion-pop-visible
      tabindex="0"
      class=" px-0 btn mask mask-hexagon flex items-center justify-center "
    >
      <div class="avatar">
        <div class="w-12 mask mask-hexagon">
          <img :src="session?.user?.image ?? 'https://i.pravatar.cc'">
        </div>
      </div>
    </label>
    <ul
      tabindex="0"
      class="menu menu-sm rounded-lg dropdown-content mt-5 z-[1] shadow-md p-2 bg-neutral text-neutral-content rounded-box w-52"
    >
      <li>
        <button class="bg-base-100 text-base-content " @click="() => signOut()">
          Logout
        </button>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
