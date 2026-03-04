<script setup lang="ts">
import { RouterView } from 'vue-router';

import Menu from '@/components/Menu.vue'

const menuItems = [
  { label: 'Galería', href: '/gallery' },
  { label: 'Info', href: '/info' },
  { label: 'Contacto', href: '/contact' },
]


</script>

<template>
  <main>   
    <Menu :items="menuItems" />
    <RouterView />
  </main>
</template>

<style scoped>

</style>
