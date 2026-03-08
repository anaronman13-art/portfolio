<script lang="ts" setup>
import Menu from '@/components/Menu.vue';
import Button from '@/components/ui/button/Button.vue';
import { RouterLink } from 'vue-router';



</script>


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


      <div class="relative w-full h-screen">
    <img src="/homeimag/torre(v1).png" alt="Castillo" class="absolute top-0 left-0 w-full h-full object-cover z-10"/>
    <img src="/homeimag/fondomontaña.jpg" alt="Fondo" class="absolute top-0 left-0 w-full h-full z-0"/>

    <button @click="$router.push('/gallery')" class="absolute top-[-20%] left-[20%] w-full h-full z-20">
      <img src="/homeimag/galeria.png" alt="Galería"/>
    </button>

    <button @click="$router.push('/info')" class="absolute top-[7%] left-[20%] w-full h-full z-20">
      <img src="/homeimag/informacion.png" alt="Info"/>
    </button>

    <button @click="$router.push('/contact')" class="absolute top-[35%] left-[20%] w-full h-full z-20">
      <img src="/homeimag/sobremi.png" alt="Contacto"/>
    </button>
  </div>

   

  </div>
</template>


<style scoped>

</style>