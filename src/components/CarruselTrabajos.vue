<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  images: string[]
}

// Recibimos las imágenes
const props = defineProps<Props>()

// Índice de la imagen actual
const currentIndex = ref(0)

// Función para ir a la siguiente imagen
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

// Función para ir a la anterior imagen
const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length
}

// Autoplay opcional
const autoPlayDelay = 3000
let interval: number | undefined

onMounted(() => {
  interval = setInterval(next, autoPlayDelay)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

// También actualizamos el índice si cambia la lista de imágenes
watch(() => props.images, () => {
  currentIndex.value = 0
})
</script>

<template>
  <div class="w-full max-w-3xl mx-auto mt-12 relative">
    <!-- Imagen actual -->
    <div class="overflow-hidden rounded-lg shadow-md">
      <img
        :src="props.images[currentIndex]"
        alt="Imagen del trabajo"
        class="w-full h-100 object-cover"
      />
    </div>

    <!-- Botones anterior / siguiente -->
    <button
      @click="prev"
      class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md hover:bg-opacity-70"
    >
      ◀
    </button>
    <button
      @click="next"
      class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md hover:bg-opacity-70"
    >
      ▶
    </button>

    <!-- Indicadores -->
    <div class="flex justify-center mt-2 gap-2">
      <span
        v-for="(img, idx) in props.images"
        :key="idx"
        :class="['w-3 h-3 rounded-full', currentIndex === idx ? 'bg-blue-500' : 'bg-gray-300']"
      ></span>
    </div>
  </div>
</template>

<style scoped>
/* Si quieres, puedes ajustar alturas y sombras aquí */
</style>