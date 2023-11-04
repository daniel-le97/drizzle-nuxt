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
  <div class="">
    <select data-choose-theme>
      <option value="">
        Default
      </option>
      <option value="dark">
        Dark
      </option>
      <option value="pink">
        Pink
      </option>
      <option value="cyberpunk">
        cyberpunk
      </option>
      <option value="coffee">
        coffee
      </option>
    </select>

    <select data-choose-theme>
      <option v-for="theme in themes" :value="theme">
        Default
      </option>
    </select>
  </div>
</template>

<style>
:root {
  --primary: #111010;
  --secondary: #4481fc;
  --accent: #e89bad;
  --neutral: #2d2438;
  --base-100: #ede8ed;
  --info: #64b0ce;
  --success: #0f766d;
  --warning: #fab505;
  --error: #ef5f57;
  --bg-color: #fff;
}
input {
  background-color: var(--base-100);
  color: var(--primary);
}

body {
  background-color: var(--base-100);
  color: var(--primary);
}

p {
  color: var(--secondary);
}
h1 {
  color: var(--primary);
}

[data-theme="dark"] {
  --primary: #f27371;
  --secondary: #eaab7e;
  --accent: #ba492a;
  --neutral: #1a1a2e;
  --base-100: #3e3545;
  --info: #5a72ed;
  --success: #176e3c;
  --warning: #ce8b0d;
  --error: #f23141;
  --bg-color: #fff;
}

[data-theme="dark"] input {
  background-color: var(--base-100);
  color: var(--primary);
}
</style>
