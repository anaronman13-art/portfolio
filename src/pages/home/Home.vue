<script lang="ts" setup>
import Menu from '@/components/Menu.vue';
import Button from '@/components/ui/button/Button.vue';
import { RouterLink } from 'vue-router';



</script>


<template>


  <div class="min-h-screen flex flex-col items-center justify-center gap-10 px-4 bg-[#071633]">

    
    <!--
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
    -->
  

      <div class="relative w-full min-h-screen">

          <h1 style="-webkit-text-stroke: 1px darkred;" class= "absolute uncial-antiqua-regular top-[20%] left-[10%] text-4xl md:text-5xl text-center text-[#D62A33] z-30">
          Portfolio
        </h1>
        <h1 style="-webkit-text-stroke: 1px darkred;" class="absolute uncial-antiqua-regular top-[5%] left-[10%] text-4xl md:text-5xl font-bold text-[#D62A33] black z-30">
          Ana Ron Manzano
        </h1>
        <img src="/homeimag/torre(v1).png" alt="Castillo" class="absolute
            top-[10%] sm:top-[12%] md:top-[0%]
            left-1/2 md:left-[4%] -translate-x-1/2 md:translate-x-0 top-[18vh] sm:top-[20vh] md:top-[5vh]
            w-full h-full object-cover
            z-20"/>
        <img src="/homeimag/fondo.jpg" alt="Fondo" class="absolute inset-0 w-full h-full object-cover z-0"/>
        <img src="/homeimag/montañasola.png" alt="Montaña" class="absolute
            top-[10%] sm:top-[12%] md:top-[0%]
            left-1/2 md:left-[4%] -translate-x-1/2 md:translate-x-0
            w-full h-full object-cover top-[12vh] sm:top-[14vh] md:top-[2vh]
            z-10"/>

        <button @click="$router.push('/gallery')"
        class="absolute top-[15%] sm:top-[12%] md:top-[15%]
               left-[35%] sm:left-[32%] md:left-[35%]
               w-[22%] sm:w-[28%] md:w-[22%]
               z-20">
    <img src="/homeimag/galeria.png" alt="Galería" class="w-full h-auto"/>
  </button>

        <button @click="$router.push('/info')" class="absolute top-[43%] left-[35%] w-[22%] z-20">
          <img src="/homeimag/informacion.png" alt="Info"/>
        </button>

        <button @click="$router.push('/contact')" class="absolute top-[70%] left-[35%] w-[22%] z-20">
          <img src="/homeimag/sobremi.png" alt="Contacto"/>
        </button>
      </div>

   

  </div>
</template>


<style scoped>
.uncial-antiqua-regular {
  font-family: "Uncial Antiqua", system-ui;
  font-weight: 400;
  font-style: normal;
}



</style>