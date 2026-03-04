<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent } from '@/components/ui/card'
import { computed, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

// Configuración del router
const router = useRouter()

// Datos de ejemplo de tarjetas
const totalCards = 12
const cards = Array.from({ length: totalCards }, (_, i) => ({
  id: i + 1,
  title: `Trabajo ${i + 1}`,
  image: '/ruta-de-tu-imagen-ejemplo.jpg', // Cambia esta ruta si quieres
}))

// Paginación
const inPagina = 6
const nuncPagina = ref(1)
const totalPaginae = Math.ceil(cards.length / inPagina)

const listaCards = computed(() => {
  const inicio = (nuncPagina.value - 1) * inPagina
  const fin = inicio + inPagina
  return cards.slice(inicio, fin)
})

const paginaNumeri = [...Array(totalPaginae)].map((_, i) => i + 1)

const ireAdPaginam = (pagina: number) => {
  if (pagina >= 1 && pagina <= totalPaginae) {
    nuncPagina.value = pagina
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 w-full max-w-350 my-8 mx-auto">

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
      <p class="mb-4">Galería de proyectos</p>
    </div>

    <!-- Grid de tarjetas -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
      <Card
        v-for="card in listaCards"
        :key="card.id"
        class="w-55 h-65 shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden"
      >
        <CardContent
          class="flex flex-col items-center gap-1 w-full px-0"
          @click="router.push({ name: 'obra-detalle', params: { id: card.id } })"
        >
          <img
            :src="card.image"
            alt=""
            class="w-full h-40 object-cover rounded-md"
          />
          <h2 class="font-medium text-lg">{{ card.title }}</h2>
        </CardContent>
      </Card>
    </div>

    <!-- Paginación -->
    <div class="flex flex-row items-center justify-center gap-2 mt-4">
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