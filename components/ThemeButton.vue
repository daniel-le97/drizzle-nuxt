<template>
  <button ref="themeBtn" @click="changeTheme()">
    <!-- <Icon icon="mdi:star" />
    -->
    THEME
  </button>
</template>
<script setup lang="ts">
const themeBtn = ref(null);

function changeTheme(){
  console.log("sdf");

};
</script>
