<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { RouterLink } from 'vue-router'
import {  Instagram, Twitter, Youtube } from 'lucide-vue-next'
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

    

    <div class="info-arca grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mt-8 px-6">

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
            Ilustración digital y tradicional · Composición visual<br />
            Teoría del color · Conceptualización de ideas
          </p>
        </div>

        <div>
            <h2 class="detalle-titulo">Contacto y redes</h2>
            <p class="detalle-parrafo">
              Puedes escribirme por correo electrónico:
              <a href="mailto:tuemail@example.com" class="text-blue-600 hover:underline">tuemail@example.com</a>
            </p>

            <div class="flex gap-4 mt-2">
              <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener">
                <Instagram class="w-6 h-6 text-gray-700 hover:text-pink-500"/>
              </a>
              <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener">
                <Twitter class="w-6 h-6 text-gray-700 hover:text-blue-400"/>
              </a>
              <a href="https://www.youtube.com/@tuusuario" target="_blank" rel="noopener">
                <Youtube class="w-6 h-6 text-gray-700 hover:text-red-600"/>
              </a>
            </div>
          </div>
      </div>

      <div class="flex flex-col gap-6">
        <div>
          <h2 class="detalle-titulo">Perfil creativo</h2>
          <p class="detalle-parrafo">
            Soy una persona creativa con especial interés en la ilustración y el diseño visual,
            con experiencia en proyectos gráficos tanto personales como académicos.
          </p>
        </div>

        <div>
          <h2 class="detalle-titulo">Formación</h2>
          <p class="detalle-parrafo">
            Bachillerato de Artes, con base sólida en dibujo, composición y color.
            Actualmente continúo formándome mediante proyectos personales y aprendizaje autodidacta.
          </p>
        </div>

        <div>
          <h2 class="detalle-titulo">Idiomas</h2>
          <p class="detalle-parrafo">
            Español — Lengua materna<br />
            Inglés — Nivel intermedio
          </p>
        </div>

        <div>
          <h2 class="detalle-titulo">Sobre mí</h2>
          <p class="detalle-parrafo">
            Me considero una persona curiosa, responsable y con muchas ganas de aprender.
            Disfruto explorando referencias visuales y mejorando mis habilidades constantemente.
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
  color: #c0c0c0;
  margin-bottom: 0.5rem;
}

.detalle-parrafo {
  font-family: "Palatino Linotype", "Book Antiqua", serif;
  font-size: 1rem;
  color: #afafaf;
  line-height: 1.6;

  text-align: justify;
  text-align-last: left;
}
</style>