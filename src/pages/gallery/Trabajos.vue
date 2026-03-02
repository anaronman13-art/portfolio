<script setup lang="ts">
import {Card, CardContent} from '@/components/ui/card'
import { computed, ref } from 'vue';

//de aqui para abajo es para hacer nuestro paginador

const totalCards = 12;

const cards = Array.from({ length: totalCards }, (_, i) => ({
  id: i + 1,
  title: `Trabajo ${i + 1}`,
  image: '/ruta-de-tu-imagen-ejemplo.jpg',
}));

const inPagina = 6

const nuncPagina = ref (1)

const totalPaginae = Math.ceil(cards.length / inPagina) //el ceil redondea la operacion, characters length es la longitud de la lista


const listaCards = computed(() => {
    const inicio = (nuncPagina.value - 1) * inPagina //el valor inicial .1 x el numero de la pagina
    const fin = inicio + inPagina
    return cards.slice(inicio,fin)
})

const ireAdPaginam = (pagina: number) => {
    if(pagina >= 1 && pagina <= totalPaginae) {
        nuncPagina.value = pagina
    }

}


const paginaNumeri: number[] = [...Array(totalPaginae)].map((_, i) => i+1)

</script>


<template>
<!--Botón a home-->
       

    <div class="flex flex-col items-center justify-center gap-8 w-full max-w-350 my-8 mx-auto">

        <div class="mb-4">
         <RouterLink to="/">
            <Button class="bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-md">
                Home
            </Button>
            </RouterLink>
    </div>

        <div class="text-center">
            <h1 class="text-3xl font-semibold mb-4">
                Trabajos
            </h1>

            <p class="mb-4">Galería de proyectos</p>

        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
             
            <Card 
                class= "w-[220px] h-[260px] shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden"
                v-for="card in listaCards"
                >

                <CardContent 
                class="flex flex-col items-center gap-1 w-full px-0"
                @click="$router.push(`/simpsons/gallery/${ card.id}`)""
                >
                    <img 
                    :src="`/imagines/simpsons/${ card.image }`" 
                    alt=""
                    class="w-full h-40 object-cover rounded-m"
                    >
                    <h2 class="font-medium text-lg">{{ card.title }}</h2>

                </CardContent>
            </Card>

        </div>


        <div class="flex flex-row items-center justify-center gap-2 mt-4">
            <button
            @click="ireAdPaginam(nuncPagina - 1)" 
            :disabled="nuncPagina === 1"
            class="px-3 py-1 border rounded-md disabled:opacity-40"
            >
                Anterior
            </button>

           
            <button
                v-for="pagina in paginaNumeri" 
                @click="ireAdPaginam(pagina)"
                :class="[
                    'w-8 h-8 border rounded-md',
                    nuncPagina === pagina ? 'bg-black text-white' : ''
                ]"
                >
                {{ pagina }}
            </button>

            <button
            <
                 @click="ireAdPaginam(nuncPagina + 1)"
                 :disabled="nuncPagina === totalPaginae"
                 class="px-3 py-1 border rounded-md disabled:opacity-40"
            >
                Siguiente
            </button>
        </div>

       
       

    
    </div>
</template>



<style scoped>

</style>