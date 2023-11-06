<script setup lang="ts">
const { session,status } = useAuth()
definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } })
</script>

<template>
  <main class=" ">
<SectionHeader title="Thi is a Protected Route" subtitle="Display data here only a authenticated user would be able to see"/>

   <div class="flex  items-center justify-center">
      <div
          v-if="session"
          class="mt-10 p-10 card glass flex flex-wrap items-center justify-center"
        >
          <div class="avatar">
            <div class="w-24 mask mask-hexagon">
              <img :src="session?.user?.image ?? ''" :alt="session?.user?.name ?? ''">
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
   </div>
  </main>
</template>

<style>
</style>
