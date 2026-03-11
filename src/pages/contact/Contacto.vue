<script setup lang="ts">
import { ref } from 'vue'
import type { DateValue } from 'reka-ui'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import Button from '@/components/ui/button/Button.vue'

import {
  Phone,
  Youtube,
  X,
  Instagram,
  MapPin,
} from 'lucide-vue-next'

const dies = ref<DateValue>()
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
    <h1>Contacto</h1>
  </div>

  <!-- Información de contacto -->
  <div class="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-center">
    <div class="w-full md:w-1/2 flex justify-center">
  <!-- Aquí pondrás tu imagen -->
      <div class="w-64 h-64 flex items-center justify-center">
        <img 
          src="/contactimag/anadib.png" 
          alt="Anaescriba" 
          class="w-full h-auto max-w-sm object-contain"
        />
      </div>
    </div>

    <div class="w-full md:w-1/2 flex flex-col gap-8">
    <div class="space-y-4 text-center md:text-left">
      <h3 class="text-xl font-bold text-white">Encuéntrame en redes sociales o contáctame personalmente</h3>
      <div class="space-y-2">
        <p class="flex items-center gap-2 justify-center md:justify-start text-white">
          <Phone class="w-5 h-5"/> +1 (555) 123-4567
        </p>
        <p>
          <a href="mailto:anaronman13@gmail.com" class="text-white">
            anaronman13@gmail.com
          </a>
        </p>
        <p class="flex items-center gap-2 justify-center md:justify-start text-white">
          <MapPin class="w-5 h-5"/> Avenida de los naranjos, Valencia
        </p>
      </div>
    </div>

    <!-- Redes sociales -->
    <div class="space-y-4 text-center md:text-left text-gray-400">
      <h3 class="text-xl font-bold text-white">Síguenos</h3>
      <div class="flex gap-8 justify-center">
        <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener">
          <Instagram class="w-6 h-6 text-gray-700 hover:text-pink-500"/>
        </a>
        <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener">
          <X class="w-6 h-6 text-gray-700 hover:text-blue-400"/>
        </a>
        <a href="https://www.youtube.com/@tuusuario" target="_blank" rel="noopener">
          <Youtube class="w-6 h-6 text-gray-700 hover:text-red-600"/> 
        </a>
      </div>
    </div>
    </div>
  </div>

  <!-- Sección de contacto -->
  <section id="contactus" class="w-full py-20">
    <div class="container mx-auto max-w-6xl px-4">
      <h2 class="text-3xl font-bold text-white mb-8 text-center">Contacta con Batman</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">

        <!-- Mapa de Google Maps -->

        <div class="relative w-full max-w-4xl mx-auto">

          <img src="/contactimag/mans2.png" 
          alt="Pergamino" 
          class="w-full h-auto object-contain" />

        <div class="absolute inset-0 flex justify-center items-center">
          <div class="w-full px-4 ml-26">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.3997258892937!2d-0.3996366!3d38.66268065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6189db351339f9%3A0xb34d9f49ad745484!2s03816%20Benifallim%2C%20Alicante!5e0!3m2!1ses!2ses!4v1771242323082!5m2!1ses!2ses" 
              width="67%" 
              height="300" 
              class="rounded-lg"
              style="border:0"
              allowfullscreen
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
          </div>
        </div>

        <!-- Formulario sobre pergamino -->
        <div class="relative w-full max-w-4xl mx-auto">
          <img src="/contactimag/mans1.png" 
               alt="Pergamino" 
               class="w-full h-auto object-contain" />

          <div class="absolute inset-0 flex justify-center items-center">
            <!-- Aquí cambiamos el ancho del formulario para que no sobresalga del pergamino -->
            <div class="w-full max-w-sm px-4">
              <form class="space-y-6">

                <div class="space-y-2">
                  <Label for="nomen">Nombre</Label>
                  <Input id="nomen" required /> 
                </div>

                <div class="space-y-2">
                  <Label for="cognomen">Apellidos</Label>
                  <Input id="cognomen" required /> 
                </div>

                <div class="space-y-2">
                  <Select required>
                    <SelectTrigger class="border-gray-200 bg-white text-black">
                      <SelectValue placeholder="Tipo de comisión" />
                    </SelectTrigger>

                    <SelectContent class="bg-white">
                      <SelectItem value="rescatare">Boceto de cabeza (10)</SelectItem>
                      <SelectItem value="investigare">Boceto de medio cuerpo (15)</SelectItem>
                      <SelectItem value="persequi">Boceto de cuerpo completo (20)</SelectItem>
                      <SelectItem value="defendere">A color de cabeza (25)</SelectItem>
                      <SelectItem value="defendere2">A color de medio cuerpo (35)</SelectItem>
                      <SelectItem value="defendere3">A color de cuerpo completo (50)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div class="space-y-2">
                  <Label for="descripcion">Descripción de la comisión</Label>
                  <textarea
                    id="descripcion"
                    rows="4"
                    placeholder="Escribe aquí los detalles de la comisión..."
                    class="w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  </textarea>
                </div>

                <Button type="submit" class="w-full bg-[rgb(106,90,205)] hover:bg-[rgb(88,75,171)] text-white text-md mt-4">
                  Enviar solicitud
                </Button>

              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</div>
</template>

<style scoped>
/* Todo el estilo ya lo tienes en Tailwind, no es necesario agregar más */
</style>