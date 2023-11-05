<script setup lang="ts">
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]

onMounted(() => {
  themeChange(false)
})
</script>

<template>
  <div>
    <div class="dropdown dropdown-end">
      <label v-motion-pop-visible tabindex="0" class="btn btn-circle btn-ghost swap swap-rotate ">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox">
        <!-- sun icon -->
        <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          />
        </svg>
        <!-- moon icon -->
        <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>

      <!-- THEME LIST -->
      <ul
        tabindex="0"
        class="  rounded-sm dropdown-content  w-60 mt-5 z-50 shadow-md p-2 bg-white rounded-box space-y-2 bg-base-300 h-96 overflow-y-scroll "
      >
        <li v-for="theme in themes" :value="theme">
          <div
            v-motion-slide-visible-right :data-set-theme="theme" :data-theme="theme" data-act-class="active-theme"
            class="theme"
          >
            <p :data-theme="theme" class="text-dark bg-transparent font-bold">
              <Icon name="uil:check" class="text-xl  icon" />{{ theme }}
            </p>
            <div class="flex space-x-0.5 items-center justify-center">
              <span :data-theme="theme" class="color-span bg-secondary" />
              <span :data-theme="theme" class="color-span bg-accent" />
              <span :data-theme="theme" class="color-span bg-neutral" />
              <span :data-theme="theme" class="color-span bg-base-100" />
              <span :data-theme="theme" class="color-span bg-info" />
              <span :data-theme="theme" class="color-span bg-success" />
              <span :data-theme="theme" class="color-span bg-warning" />
              <span :data-theme="theme" class="color-span bg-error" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.theme {
  @apply cursor-pointer flex w-full justify-between px-2 py-4 rounded-md;
}

.active-theme .icon {
  @apply scale-100 transition-all duration-300 ease-linear !important
}

.theme .icon {
  @apply scale-0 transition-all duration-300 ease-linear
}

.color-span {
  @apply w-2 h-4 rounded-full shadow-sm;

}
</style>
