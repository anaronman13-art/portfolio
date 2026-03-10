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
  <main class="bg-gray-900 min-h-screen relative">   
<Minimenu />
<!-- <Menu :items="menuItems" /> -->
    <RouterView />
  </main>
</template>

<style scoped>

</style>
