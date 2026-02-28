

import Contacto from "@/pages/contact/Contacto.vue";
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
      name: 'gallery',
      component: Trabajos
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