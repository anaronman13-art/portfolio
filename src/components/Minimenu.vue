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
    <button @click="toggleMenu" class="p-2 focus:outline-none ml-auto mr-4 block flex flex-col justify-center items-center">
      <!-- Tres rayitas -->
      <div class="w-6 h-0.5 bg-yellow-500 my-1"></div>
      <div class="w-6 h-0.5 bg-yellow-500 my-1"></div>
      <div class="w-6 h-0.5 bg-yellow-500 my-1"></div>
    </button>

    <!-- Menú desplegable -->
    <div
      v-if="abierto"
      class="absolute right-2 mt-2 w-40 bg-gray-800 rounded-md shadow-lg flex flex-col z-50 bg-gray-900"
    >
      <RouterLink to="/" class="px-4 py-2 hover:bg-gray-700 text-white font-serif0">Home</RouterLink>
      <RouterLink to="/gallery" class="px-4 py-2 hover:bg-gray-700 text-white font-serif">Galería</RouterLink>
      <RouterLink to="/info" class="px-4 py-2 hover:bg-gray-700 text-white font-serif">Información</RouterLink>
      <RouterLink to="/contact" class="px-4 py-2 hover:bg-gray-700 text-white font-serif">Contacto</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Opcional: transición rápida */
div[ v-cloak ] { display: none; }
</style>