<script setup lang="ts">
import { ref } from 'vue'
import ThemeButton from './ThemeButton.vue'

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

// Add scroll event listener when the component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Remove scroll event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    ref="nav"
    class="navbar glass flex-row fixed top-0 w-full p-4 transition-transform duration-500 ease-in-out"
    :style="{ transform: navTransform }"
  >
    <div class="navbar-start">
      <!-- //NOTE -  MOBILE MENU -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
        >
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

      <!-- //NOTE -  MOBILE MENU -->
      <a class="btn text-xl btn-ghost">Drizzle Nuxt</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="flex space-x-4 items-center justify-center">
        <li class="  ">
          <NuxtLink to="/" exact-active-class="active-link" class="link-item">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/signin" exact-active-class="active-link">
            Login
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end space-x-4">
      <SearchBar />
      <ThemeButton />
      <div class="dropdown dropdown-end">
        <label
          tabindex="0"
          class="btn btn-neutral-200 shadow-md btn-circle avatar mask mask-hexagon"
        >
          <div class="avatar">
            <div class="w-10 mask mask-hexagon">
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

          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  z-index: 99999;
}
.active-link {
  color: var(--success);
  font-weight: bold;
  position: relative;
}

.link-item {
  position: relative;
  color: var(--primary);
}

.active-link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px; /* Adjust the underline height as needed */
  background-color: var(--success);
  bottom: -1px;
  left: 0;

  transform-origin: left;
  transition: transform 0.3s; /* Adjust the duration as needed */
}

.link-item:hover::before {
  transform: scaleX(1); /* Expand to full width on hover */
}
</style>
