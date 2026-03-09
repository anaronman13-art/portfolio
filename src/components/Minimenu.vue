<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Estado del menú abierto o cerrado
const abierto = ref(false)

const toggleMenu = () => {
  abierto.value = !abierto.value
}
</script>

<template>
  <div class="relative">
    <!-- Botón hamburguesa -->
    <button @click="toggleMenu" class="p-2 border rounded-md focus:outline-none">
      <!-- Tres rayitas -->
      <div class="w-6 h-0.5 bg-black my-1"></div>
      <div class="w-6 h-0.5 bg-black my-1"></div>
      <div class="w-6 h-0.5 bg-black my-1"></div>
    </button>

    <!-- Menú desplegable -->
    <div
      v-if="abierto"
      class="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg flex flex-col"
    >
      <RouterLink to="/" class="px-4 py-2 hover:bg-gray-200">Home</RouterLink>
      <RouterLink to="/gallery" class="px-4 py-2 hover:bg-gray-200">Galería</RouterLink>
      <RouterLink to="/info" class="px-4 py-2 hover:bg-gray-200">Información</RouterLink>
      <RouterLink to="/contact" class="px-4 py-2 hover:bg-gray-200">Contacto</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Opcional: transición rápida */
div[ v-cloak ] { display: none; }
</style>