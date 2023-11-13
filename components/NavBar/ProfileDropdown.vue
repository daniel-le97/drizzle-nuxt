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
          <NuxtImg :src="session?.user?.image ?? ''" />
        </div>
      </div>
    </label>
    <ul
      tabindex="0"
      class="menu menu-sm rounded-sm dropdown-content mt-[0.7rem] z-[1] shadow-md p-2 bg-base-100 text-base-content rounded-box w-52"
    >
      <li>
        <button type="button" @click="() => signOut()" class=" flex items-center justify-between space-x-3">
<span>Logout</span>
          <Icon name="lets-icons:sign-out-squre-duotone-line"/>
        </button>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
