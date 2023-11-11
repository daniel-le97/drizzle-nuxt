<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

import SearchBar from './SearchBar.vue';
import ThemeButton from './ThemeButton.vue';

const { session } = useAuth();
const navTransform = ref('translateY(0)');
let lastScrollPosition = 0;

const route = useRoute()
route.path

function handleScroll() {
  const scrollY = window.scrollY;
  navTransform.value = scrollY > lastScrollPosition ? 'translateY(-100%)' : 'translateY(0)';
  lastScrollPosition = scrollY;
}

function handleIndicator(el) {
  const indicator = document.querySelector('.nav-indicator');
  const items = document.querySelectorAll('.nav-item');

  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

function setupIndicatorListeners() {
  const items = document.querySelectorAll('.nav-item');
  const indicator = document.querySelector('.nav-indicator');

  items.forEach(item => {
    item.addEventListener('click', (e) => handleIndicator(e.target));
    if (item.classList.contains('is-active')) {
      handleIndicator(item);
    }
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  setupIndicatorListeners();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<template>
  <div ref="nav" class="navbar  bg-base-100 " :style="{ transform: navTransform }">
    <div class="navbar-start">
      <div role="Mobile-NavBar" class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
          <Icon name="tdesign:hamburger" size="35" />
        </label>
        <ul tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-50 bg-base-100 text-base-content p-2 shadow rounded-box w-52">
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
      <a v-motion-pop-visible
        class="p-3 px-5 rounded-md text-xl font-bold bg-neutral text-neutral-content  hidden  lg:flex">Drizzle Nuxt</a>
    </div>
    <div class="nav-ul">
      <NuxtLink href="/" class="nav-item is-active" active-color="orange">Home</NuxtLink>
      <NuxtLink href="/about" class="nav-item " active-color="orange">About</NuxtLink>
      <NuxtLink href="/contact" class="nav-item " active-color="orange">Contact</NuxtLink>
      <NuxtLink v-if="session?.user" href="/account" class="nav-item " active-color="orange">Account</NuxtLink>
      <NuxtLink v-else href="/login" class="nav-item " active-color="orange">Login</NuxtLink>
      <span class="nav-indicator"></span>
    </div>
    <div class="navbar-end space-x-4">
      <SearchBar />
      <ThemeButton />
      <NavBarProfileDropdown v-if="session?.user" />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  @apply flex-row fixed top-0 w-full p-0 px-2 transition-transform shadow-md duration-500 ease-in-out;
  z-index: 100;
}



/* TranslateX to active link */


.link {
  @apply text-lg hover:text-[var(--info)] text-[hsl(var(--bc))];
}


.nav-ul {
  display: inline-flex;
  position: relative;
  overflow: hidden;
  width: 100%;


}

.nav-item {

  padding: 20px;
  text-decoration: none;
  transition: .3s;
  margin: 0 6px;
  z-index: 1;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #dfe2ea;
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: .3s;
  }
}

.nav-item:not(.is-active):hover:before {
  opacity: 1;
  bottom: 0;
}


.nav-item:not(.is-active):hover {
  color: #333;
}

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  transition: .4s;
  height: 5px;
  z-index: 1;
  border-radius: 8px 8px 0 0;
}

@media (max-width: 580px) {
  .nav {
    overflow: auto;
  }
}
</style>
