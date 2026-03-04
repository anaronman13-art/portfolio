<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useProyectos } from '@/composables/useProyectos'

const route = useRoute()
const router = useRouter()

const { getProyecto } = useProyectos()
const proyectoId = route.params.id as string
const proyecto = getProyecto(proyectoId)

// Función para volver a la galería
const volver = () => router.push({ name: 'galeria' })
</script>

<template>
  <div class="p-8 flex flex-col items-center gap-6">
    <button 
      @click="volver"
      class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
    >
      Volver a la galería
    </button>

    <div class="flex flex-col lg:flex-row gap-8 items-start">
      <!-- Imagen de la obra -->
      <div class="w-full lg:w-1/2 flex justify-center">
        <img 
          :src="proyecto?.imagen ?? '/placeholder.jpg'" 
          :alt="proyecto?.titulo ?? 'Obra'" 
          class="w-full h-auto rounded-md shadow-md"
        />
      </div>

      <!-- Texto del trabajo -->
      <div class="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 class="text-3xl font-bold">{{ proyecto?.titulo ?? 'Título de la obra' }}</h1>
        <p>{{ proyecto?.descripcion ?? 'Descripción de ejemplo de la obra...' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>