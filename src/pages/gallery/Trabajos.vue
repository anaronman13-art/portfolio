<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent } from '@/components/ui/card'
import { computed, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import{ trabajos } from './data'


const router = useRouter()

const inPagina = 2
const nuncPagina = ref(1)
const totalPaginae = Math.ceil(trabajos.length / inPagina)

const listaCards = computed(() => {
  const inicio = (nuncPagina.value - 1) * inPagina
  const fin = inicio + inPagina
  return trabajos.slice(inicio, fin)
})

const paginaNumeri = [...Array(totalPaginae)].map((_, i) => i + 1)

const ireAdPaginam = (pagina: number) => {
  if (pagina >= 1 && pagina <= totalPaginae) {
    nuncPagina.value = pagina
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 w-full max-w-350 -mt-2 mx-auto">

    <!-- Botón a home -->
    <div class="mb-4">
      <RouterLink to="/">
        <Button class="bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-md">
          Home
        </Button>
      </RouterLink>
    </div>

    <!-- Título -->
    <div class="text-center">
      <h1 class="text-3xl font-semibold mb-4">Trabajos</h1>
  
    </div>
  
    
    <img
    src="/galleryimag/marco1.png"
    class="absolute top-[19.5%] left-[5%] w-[49.5%] z-20 pointer-events-none"
  />
  <img
    src="/galleryimag/marco2.png"
    class="absolute top-[19.5%] left-[45%] w-[49.5%] z-20 pointer-events-none"
  />
    <!-- Tarjetas -->
    <div class="grid grid-cols-2 gap-[180px] justify-items-center px-8 md:px-12 max-w-6xl mx-auto">
      <Card
        v-for="card in listaCards"
        :key="card.id"
        class="relative w-110 h-70 shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden border-none"
      >
        <CardContent
          class="relative flex flex-col items-center gap-1 w-full px-0"
          @click="router.push({ name: 'obra-detalle', params: { id: card.id } })"
        >
          <img
            :src="`/trabajos/${card.cuadro}`"
            :alt="card.titulo"
            class="inset-0 w-full h-full object-cover"
          />
          
          <h2 class="font-medium text-lg">{{ card.titulo }}</h2>
        </CardContent>
      </Card>
    </div>

    <!-- Paginación -->
    <div class="flex flex-row items-center justify-center gap-2 mt-12">
      <button
        @click="ireAdPaginam(nuncPagina - 1)"
        :disabled="nuncPagina === 1"
        class="px-3 py-1 border rounded-md disabled:opacity-40"
      >
        Anterior
      </button>

      <button
        v-for="pagina in paginaNumeri"
        :key="pagina"
        @click="ireAdPaginam(pagina)"
        :class="['w-8 h-8 border rounded-md', nuncPagina === pagina ? 'bg-black text-white' : '']"
      >
        {{ pagina }}
      </button>

      <button
        @click="ireAdPaginam(nuncPagina + 1)"
        :disabled="nuncPagina === totalPaginae"
        class="px-3 py-1 border rounded-md disabled:opacity-40"
      >
        Siguiente
      </button>
    </div>

  </div>
</template>

<style scoped>

</style>