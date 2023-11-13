<script setup lang="ts">

import Footer from '~/components/globals/Footer.vue'
import Modal from '~/components/globals/Modal.vue';
import LoginModal from '~/components/LoginModal.vue';
import NavBar from '~/components/NavBar/NavBar.vue'
</script>

<template>
  <NavBar />
  <slot />
  <Footer />
  <Modal>
    <LoginModal />
  </Modal>
</template>
