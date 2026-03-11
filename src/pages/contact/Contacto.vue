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


  <div class="detalle-titulo mb-14">
    <h1>Contacto</h1>
  </div>

  <!-- Información de contacto -->
  <div class="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-center">
    <div class="w-full md:w-1/2 flex justify-center">
  
      
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
      <h3 class="detalle-parrafo text-xl font-bold text-[#8eb3ce]!">Encuéntrame en redes sociales o contáctame personalmente</h3>
      <div class="space-y-2">
        <p class="flex items-center gap-2 justify-center md:justify-start text-[#c8b082]">
          <Phone class="w-5 h-5"/> +1 (555) 123-4567
        </p>
        <p>
          <a href="mailto:anaronman13@gmail.com" class="text-[#c8b082]">
            anaronman13@gmail.com
          </a>
        </p>
        <p class="flex items-center gap-2 justify-center md:justify-start text-[#c8b082]">
          <MapPin class="w-5 h-5"/> Avenida de los naranjos, Valencia
        </p>
      </div>
    </div>

    <!-- Redes sociales -->
    <div class="space-y-4 text-center md:text-left text-gray-400">
      <div class="flex gap-8 justify-center md:justify-start">
        <a href="https://www.instagram.com/pan.deleche_137/" target="_blank" rel="noopener">
          <Instagram class="w-6 h-6 text-[#c8b082] hover:text-pink-500"/>
        </a>
        <a href="https://x.com/egg_centric13" target="_blank" rel="noopener">
          <X class="w-6 h-6 text-[#c8b082] hover:text-blue-400"/>
        </a>
        <a href="https://www.youtube.com/channel/UC2tzLlclWa3n2et3W-SeKBg" target="_blank" rel="noopener">
          <Youtube class="w-6 h-6 text-[#c8b082] hover:text-red-600"/> 
        </a>
      </div>
    </div>
    </div>
  </div>

  <!-- Sección de contacto -->
  <section id="contactus" class="w-full py-20">
    <div class="container mx-auto max-w-6xl px-4">
      <h2 class="detalle-subtitulo text-3xl mb-8 text-center">¿Quieres hacerme una comisión?</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">

        <!-- Mapa-->

        <div class="relative w-full max-w-4xl mx-auto">

          <img src="/contactimag/mans2.png" 
          alt="Pergamino" 
          class="w-full h-auto object-contain" />

        <div class="absolute inset-0 flex justify-center items-center">
          <div class="w-full px-4 ml-26">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6159.163176770327!2d-0.34007719631648425!3d39.47878022459754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604886f2897e87%3A0x49579a05e6745a82!2sAristot%C3%A9lica!5e0!3m2!1ses!2ses!4v1773213194949!5m2!1ses!2ses" 
            width="67%" 
            height="300" 
            style="border:0;" 
            allowfullscreen="true" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
         
            </div>
          </div>
        </div>

        <!-- Formulario-->
        <div class="relative w-full max-w-4xl mx-auto">
          <img src="/contactimag/mans1.png" 
               alt="Pergamino" 
               class="w-full h-auto object-contain" />

          <div class="absolute inset-0 flex justify-center items-center">

            <div class="w-full max-w-sm px-4">
              <form class="space-y-6">

                <div class="space-y-2">
                  <Label for="nomen" class="detalle-parrafo">Nombre</Label>
                  <Input id="nomen" required class="bg-[#8eb3ce]" /> 
                </div>

                <div class="space-y-2">
                  <Label for="cognomen" class="detalle-parrafo">Apellidos</Label>
                  <Input id="cognomen" required class="bg-[#8eb3ce]"/> 
                </div>

                <div class="space-y-2">
                  <Select required>
                    <SelectTrigger class="border-gray-200 bg-[#8eb3ce] text-black detalle-parrafo">
                      <SelectValue placeholder="Tipo de comisión" />
                    </SelectTrigger>

                    <SelectContent class="bg-white">
                      <SelectItem value="rescatare" class="detalle-parrafo">Boceto de cabeza (10)</SelectItem>
                      <SelectItem value="investigare" class="detalle-parrafo">Boceto de medio cuerpo (15)</SelectItem>
                      <SelectItem value="persequi" class="detalle-parrafo" >Boceto de cuerpo completo (20)</SelectItem>
                      <SelectItem value="defendere" class="detalle-parrafo">A color de cabeza (25)</SelectItem>
                      <SelectItem value="defendere2" class="detalle-parrafo">A color de medio cuerpo (35)</SelectItem>
                      <SelectItem value="defendere3" class="detalle-parrafo">A color de cuerpo completo (50)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div class="space-y-2">
                  <Label for="descripcion" class="detalle-parrafo">Descripción de la comisión</Label>
                  <textarea
                    id="descripcion"
                    rows="4"
                    placeholder="Escribe aquí los detalles de la comisión..."
                    class="w-full border border-gray-300 rounded-md p-2 bg-[#8eb3ce] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  </textarea>
                </div>

                <Button type="submit" class="w-full bg-[#8eb3ce] hover:bg-[#4e809d] text-white text-md mt-4 detalle-parrafo">
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
.detalle-titulo {
  font-family: "Georgia", "Times New Roman", serif;
  font-size: 3rem;
  font-weight: bold;
  color: #eddfb6;
}

.detalle-subtitulo {
  font-family: "Georgia", "Times New Roman", serif;
  font-size: 1.7rem;
  font-weight: bold;
  color: #eddfb6;
}

.detalle-parrafo {
  font-family: "Palatino Linotype", "Book Antiqua", serif;
  font-size: 1.4rem;
  color: #811f48;
  line-height: 1.6;
}
</style>