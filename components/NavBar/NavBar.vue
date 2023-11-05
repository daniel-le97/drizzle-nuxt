<script setup lang="ts">
import { ref } from 'vue'
import ThemeButton from './ThemeButton.vue'
import SearchBar from './SearchBar.vue'
import ProfileDropdown from './ProfileDropdown.vue'

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
  <div
    ref="nav"
    class="navbar  bg-base-100 "
    :style="{ transform: navTransform }"
  >
    <div class="navbar-start">
      <!-- //NOTE -  MOBILE MENU -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
          <Icon name="tdesign:hamburger" size="35" />
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-50 bg-base-100 p-2 shadow rounded-box w-52"
        >
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
      <!-- //NOTE -  MOBILE MENU -->
      <a v-motion-pop-visible class="p-2 rounded-md text-lg font-bold bg-neutral text-neutral-content  hidden  lg:flex">Drizzle Nuxt</a>
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
      <ProfileDropdown />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  @apply flex-row fixed top-0 w-full p-3 transition-transform shadow-md duration-500 ease-in-out;
  z-index: 99999;
}
.active-link {
  @apply font-bold  transition-all duration-300 ease-linear relative;

}

.active-link::before {
  content: '';
  width: 100%;
  height: 4px; /* Adjust the height of the underline as needed */
  background-color: red;
  position: absolute;
  bottom: -6px;
  left: 0;
  transition: all 0.3s ease; /* Add a smooth transition effect */
}
.link{
  @apply text-lg hover:text-[var(--info)] text-[hsl(var(--bc))] ;
}
</style>
