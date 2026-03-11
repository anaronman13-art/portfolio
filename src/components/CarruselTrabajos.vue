<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  images: string[]
}


const props = defineProps<Props>()

const currentIndex = ref(0)


const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}


const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length
}


const autoPlayDelay = 3000
let interval: number | undefined

onMounted(() => {
  interval = setInterval(next, autoPlayDelay)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})


watch(() => props.images, () => {
  currentIndex.value = 0
})
</script>

<template>
  <div class="w-full max-w-3xl mx-auto mt-12 relative">
 
    <div class="overflow-hidden shadow-md">
      <img
        :src="props.images[currentIndex]"
        alt="Imagen del trabajo"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Botones anterior / siguiente -->
    <button
      @click="prev"
      class="absolute top-1/2 left-[-14rem] transform -translate-y-1/2 bg-opacity-50 text-white px-3 py-1 rounded-md hover:bg-opacity-70 z-40"
    >
       <img src="/galleryimag/fizq.png" alt="Anterior" class="w-10 h-auto"/>
    </button>
    <button
      @click="next"
      class="absolute top-1/2 right-[-14rem] transform -translate-y-1/2 bg-opacity-50 text-white px-3 py-1 rounded-md hover:bg-opacity-70 z-40"
    >
      <img src="/galleryimag/fder.png" alt="Anterior" class="w-10 h-auto"/>
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

</style>