<script setup lang="ts">
const { session, signOut } = useAuth()
</script>

<template>
  <div class="dropdown dropdown-end">
    <label
      v-motion-pop-visible
      tabindex="0"
      class="btn mask mask-hexagon px-0 flex items-center justify-center"
    >
      <div class="avatar">
        <div class="w-14 mask mask-hexagon">
          <img :src="session?.user?.image ?? 'https://i.pravatar.cc'">
        </div>
      </div>
    </label>
    <ul
      tabindex="0"
      class="menu menu-sm rounded-sm dropdown-content mt-5 z-[1] shadow-md p-2 bg-white rounded-box w-52"
    >
      <li>
        <a class="justify-between">
          Profile
          <span class="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>

      <li>
        <button type="button" @click="() => signOut()">
          Logout
        </button>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
