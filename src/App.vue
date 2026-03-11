<script setup lang="ts">
import { RouterView } from 'vue-router';

import Menu from '@/components/Menu.vue';
import Minimenu from './components/Minimenu.vue';


const menuItems = [
  { label: 'Galería', href: '/gallery' },
  { label: 'Info', href: '/info' },
  { label: 'Contacto', href: '/contact' },
]


</script>

<template>
  <main class="bg-[#011748] min-h-screen relative z-999">   
<Minimenu />

    <RouterView />
  </main>
</template>

<style scoped>

</style>
