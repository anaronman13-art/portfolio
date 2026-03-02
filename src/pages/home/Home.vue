<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue';



</script>

<>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-10 px-4">

    <h1 class="text-4xl md:text-5xl font-bold text-center">
      Ana Ron Web
    </h1>

    <div class="flex flex-col sm:flex-row gap-6">
      <RouterLink to="/gallery">
        <Button class="w-40">Galería</Button>
      </RouterLink>

      <RouterLink to="/contact">
        <Button class="w-40">Contacto</Button>
      </RouterLink>

      <RouterLink to="/info">
        <Button class="w-40">Información</Button>
      </RouterLink>
    </div>

  </div>
</template>


<style scoped>

</style>