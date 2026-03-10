<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { trabajos } from '@/pages/gallery/data'
import CarruselTrabajos from '@/components/CarruselTrabajos.vue'

const route = useRoute()
const router = useRouter()

const proyectoId = Number(route.params.id)

const proyecto = trabajos.find(
  trabajo => trabajo.id === proyectoId
)

// Función para volver a la galería
const volver = () => router.push({ name: 'galeria' })

const portadaSrc = proyecto ? `/portadas/${proyecto.portada}` : '/placeholder.jpg'
</script>




<template>
  <div class="p-8 flex flex-col items-center gap-6">
    <button 
      @click="volver"
      class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
    >
      Volver a la galería
    </button>

    <div class="flex flex-col lg:flex-row gap-12 items-start">
      
      <div class="w-full lg:w-1/2 flex justify-center">
        <img
          :src="portadaSrc"
          :alt="proyecto?.titulo ?? 'Portada'"
          class="w-[78%] h-auto rounded-md shadow-md"
        />
      </div>

      
      <div class="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 class="detalle-titulo">{{ proyecto?.titulo ?? 'Título de la obra' }}</h1>
        <p class="detalle-parrafo">{{ proyecto?.descripcion ?? 'Descripción de ejemplo de la obra...' }}</p>
      </div>
    </div>

    <div class="relative w-full max-w-4xl mx-auto mt-12">
  <!-- Contenedor del marco -->
  <div class="relative w-full flex justify-center">
    <!-- Marco -->
    <img src="/galleryimag/detallec2.png" 
         alt="Marco Carrusel" 
         class="relative w-full h-auto z-20"/>
         
    <!-- Carrusel dentro del marco -->
    <div class="absolute inset-0 flex items-center justify-center -translate-y-11">
      <div class="w-[72.5%] h-[72.5%]">
      <CarruselTrabajos :images="proyecto.gallery"/>
    </div>
    </div>
  </div>
</div>
   

  <img 
      src="/galleryimag/detallec1.png" 
      alt="Marco" 
      class="absolute top-[5%] left-[18%] w-[30%] aspect-auto pointer-events-none"
    />

    

  </div>
</template>



<style scoped>
.detalle-titulo {
  font-family: "Georgia", "Times New Roman", serif;
  font-size: 1.7rem;
  font-weight: bold;
  color: #222;
}


.detalle-parrafo {
  font-family: "Palatino Linotype", "Book Antiqua", serif;
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
}
</style>