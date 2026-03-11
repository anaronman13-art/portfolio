<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { RouterLink } from 'vue-router'
import {  Instagram, X, Youtube } from 'lucide-vue-next'
</script>

<template>
  <div class="p-8 flex flex-col items-center bg-[#071633]">
    

    

    <div class="pb-24 info-arca grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mt-8 px-6">

      <div class="flex flex-col gap-8 items-start">
        
          <span class="text-gray-600">
            <img
              src="/otras/infoana.png"
              alt="Foto de Ana"
              class="w-100 h-100 object-contain rounded-md"
            />
          </span>
      

        <div>
          <h2 class="detalle-titulo">Habilidades técnicas</h2>
          <p class="detalle-parrafo">
            Adobe Photoshop · Adobe Illustrator · Adobe InDesign<br />
          </p>
        </div>

        <div>
            <h2 class="detalle-titulo">Contacto y redes</h2>
            <p class="detalle-parrafo">
                ¡No dude en contactarme por correo o por redes sociales!
              <a href="aronman13@gmail.com" class="text-[#92b6d0] hover:underline">aronman13@gmail.com</a>
            </p>

            <div class="flex gap-4 mt-2">
              <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener">
                <Instagram class="w-6 h-6 text-[#c8b082] hover:text-pink-500"/>
              </a>
              <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener">
                <X class="w-6 h-6 text-[#c8b082] hover:text-blue-400"/>
              </a>
              <a href="https://www.youtube.com/@tuusuario" target="_blank" rel="noopener">
                <Youtube class="w-6 h-6 text-[#c8b082] hover:text-red-600"/>
              </a>
            </div>
          </div>
      </div>

      <div class="flex flex-col gap-6">
        <div>
          <h2 class="detalle-titulo">Ana Ron Manzano</h2>
          <p class="detalle-parrafo">
            Soy estudiante en el grado de Diseño y Tecnologías Creativas en la Universidad Politécnica de Valencia.
            Tnego un gran interés en la ilustración, el arte conceptual y el diseño de videojuegos, y manejo tanto herramientas tradicionales como digitales.
          </p>
        </div>

        <div>
          <h2 class="detalle-titulo">Formación</h2>
          <p class="detalle-parrafo">
            Bachillerato de Artes, actualmente cursando segundo año en el grado de Diseño y Tecnologías Creativas en la UPV.
            Actualmente continúo formándome tanto en el grado de Diseño y Tecnologías Creativas como mediante proyectos personales y aprendizaje autodidacta.
          </p>
        </div>

        <div>
          <h2 class="detalle-titulo">Idiomas</h2>
          <p class="detalle-parrafo">
            Español · Inglés<br />
            
          </p>
        </div>

        <div>
          <h2 class="detalle-titulo">Sobre mí</h2>
          <p class="detalle-parrafo">
            Me considero una persona con una gran curiosidad por aprender diversas técnicas y modods de expresión. Me interesa especialmente el mixed-media y mezcla de formatos como pueden ser
            la fotografía, la ilustración con todo tipo de técnicas tradicionales y digitales y los medios audiovisuales. 
            Tengo especial interés en aprender sobre animación, pixel art, diseño de videojuegos, creación de cómic y arte conceptual.
            Actualmente destaco especialmente en la creación de arte conceptual, diseño de personaje e ilustración.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.detalle-titulo {
  font-family: "Georgia", "Times New Roman", serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: #f49a21;
  margin-bottom: 0.5rem;
}

.detalle-parrafo {
  font-family: "Palatino Linotype", "Book Antiqua", serif;
  font-size: 1.2rem;
  color: #eddfb6;
  line-height: 1.6;

  text-align: justify;
  text-align-last: left;
}
</style>