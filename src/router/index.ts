import Contacto from "@/pages/contact/Contacto.vue";
import Detalle from "@/pages/gallery/Detalle.vue";
import LayoutGaleria from "@/pages/gallery/LayoutGaleria.vue";
import Trabajos from "@/pages/gallery/Trabajos.vue";
import Home from "@/pages/home/Home.vue";
import Info from "@/pages/iformartion/Info.vue";

import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      children: [
    {
      path: '',
      name: 'galeria',
      component: Trabajos
    },
    {
      path: ':id',
      name: 'obra-detalle',
      component: Detalle
    }
  ]
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contacto
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})