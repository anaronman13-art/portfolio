<script setup lang="ts">

</script>

<template>

<div class="p-8 flex flex-col items-center">
  <div class="mb-4">
    <RouterLink to="/">
      <Button class="bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-md">
          Home
      </Button>
      </RouterLink>
  </div>


    <div>
      <h1>Información</h1>
    </div>

    <!-- Contenedor principal de dos columnas -->
  <div class="info-arca flex gap-8">

    <!-- Columna izquierda: placeholder para foto + textos 4 y 5 -->
    <div class="item-left flex flex-col gap-4">
      <!-- Imagen de ejemplo, sin ruta real -->
      <div class="w-80 h-80 bg-gray-300 rounded-md flex items-center justify-center">
        <span class="text-gray-600">Foto aquí</span>
      </div>
      <p>Sobre mí: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <p>Skills: HTML, CSS, Vue, Tailwind...</p>
    </div>

    <!-- Columna derecha: nombre + textos 1,2,3 -->
    <div class="item-right flex flex-col gap-4">
      <h1 class="text-4xl font-bold">Mi Nombre</h1>
      <p>¿Qué soy?: Diseñadora / Ilustradora...</p>
      <p>Educación: UPV, Títulos obtenidos...</p>
      <p>Idiomas: Español, Inglés...</p>
    </div>

  </div>
    
  </div>
</template>


<style scoped>

</style>