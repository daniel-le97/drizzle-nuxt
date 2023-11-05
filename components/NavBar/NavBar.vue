<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import ThemeButton from './ThemeButton.vue'
import Profile from './Profile.vue'

const { session } = useAuth()
const nav = ref(null)
const navTransform = ref('translateY(0)')
let lastScrollPosition = 0

function handleScroll() {
  const scrollY = window.scrollY

  if (scrollY > lastScrollPosition) {
    // Scrolling down, hide the navigation
    navTransform.value = 'translateY(-100%)'
  }
  else {
    // Scrolling up, show the navigation
    navTransform.value = 'translateY(0)'
  }

  lastScrollPosition = scrollY
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div ref="nav" class="navbar " :style="{ transform: navTransform }">
    <div class="navbar-start">
      <!--   MOBILE MENU -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <!--   MOBILE MENU -->
      <a v-motion-pop-visible class="btn text-xl btn-ghost">Drizzle Nuxt</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="flex space-x-4 items-center justify-center">
        <li v-motion-pop-visible>
          <NuxtLink to="/" class="link" active-class="active-link">
            Home
          </NuxtLink>
        </li>
        <li v-motion-pop-visible>
          <NuxtLink to="/about" class="link" active-class="active-link">
            About
          </NuxtLink>
        </li>
        <li v-motion-pop-visible>
          <NuxtLink to="/contact" class="link" active-class="active-link">
            Contact
          </NuxtLink>
        </li>
        <li v-motion-pop-visible>
          <NuxtLink v-if="!session?.user" to="/login" class="link" active-class="active-link">
            Login
          </NuxtLink>
          <NuxtLink v-else to="/account" class="link" active-class="active-link">
            Account
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end space-x-4">
      <SearchBar />
      <ThemeButton />
      <Profile />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  @apply shadow-md bg-base-100 flex-row fixed top-0 w-full p-4 transition-transform duration-500 ease-in-out;
  z-index: 99999;
}

.active-link {
  @apply font-bold relative transition-all duration-300 ease-linear underline-offset-2 underline;
  color: var(--info);

}

.link {
  @apply text-lg hover:text-[var(--info)] text-[hsl(var(--bc))]
}
</style>
