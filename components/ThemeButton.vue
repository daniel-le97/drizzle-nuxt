<template>
  <div class="m-5">
    <select
      data-choose-theme
      class="focus:outline-none h-10 rounded-full px-3 border"
    >
      <option value="">Default</option>
      <option value="dark">Dark</option>
      <option value="black">Black</option>
      <option value="🌸">🌸 Pink</option>
      <option value="🐬">🐬 Blue</option>
      <option value="🐤">🐤 Yellow</option>
    </select>
  </div>
</template>

<script setup lang="ts">
function changeTheme(theme: string) {}
import { onMounted } from "vue";
import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(false);
});
</script>

<style>
:root {
  --color-default: #fff;
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-default: #ffffff;
  }
}
[data-theme="dark"] {
  --color-default: #252b30;
}
[data-theme="black"] {
  --color-default: #000000;
}
[data-theme="🌸"] {
  --color-default: #ffabc8;
}
[data-theme="🐬"] {
  --color-default: #7ec6ff;
}
[data-theme="🐤"] {
  --color-default: #ffd65a;
}
body {
  background-color: var(--color-default);
}
</style>
