<script setup lang="ts">

import { HouseHeart, Menu } from 'lucide-vue-next';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { Toggle } from '@/components/ui/toggle'
import { onMounted, onUnmounted, ref } from 'vue';

interface MenuItems {
    label: string,
    href: string,
    onClick?: () => void
}

interface Props {
    items: MenuItems[],
    homeRoute?: string
}

withDefaults(defineProps<Props>(), {
    homeRoute: '/'
})

const videreMenu = ref<boolean> (true)

const handleResize = () => {
  if(window.innerWidth <= 640){
    videreMenu.value = false;

  } else {
    videreMenu.value = true
  }
}

onMounted (() => {
  handleResize()
  window.addEventListener ('resize', handleResize)
}) 

onUnmounted (() => {
  window.removeEventListener('resize', handleResize)
})



</script>


<template>

  


    <div>
        <Toggle
        class="fixed top-2 right-4 bg-slate-500"
        @click="videreMenu = !videreMenu"
        >
        <Menu />

        </Toggle>

        <nav v-if="videreMenu" class="extra-nav flex flex-col sm:flex-row justify-between px-3">

            <RouterLink :to="homeRoute">
            <!-- cómo metemos iconos? -->
            <!-- con la biblioteca lucide que ya esta instalao, tenemos un monton -->
            <HouseHeart class="icon-home"/>
            </RouterLink>

            <NavigationMenu>
                <NavigationMenuList class="flex flex-col sm:flex-row">

                    <NavigationMenuItem 
                        v-for="item in items" 
                        :key="item.label"
                        >
                    <NavigationMenuLink as-child>
                        <RouterLink
                            :to="item.href"
                            :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white']"
                        >
                        {{ item.label }}
                        </RouterLink>
                    </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

        </nav>

    </div>
</template>



<style scoped>

    .icon-home {
        color: orange;
        width: 3rem;
        height: 100%;
        /* cada rem son 16 pixeles */
        /* si le pones 100% a uno de los dos, cambia de forma proporcional */
    }

    .icon-home:hover {
        color: white;
        background-color: orange;

    }

    .extra-nav {
    background-color: white;
    opacity: 0.7;
    box-shadow: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    width: 11rem;
    border-radius: 0 0 1rem 0;
    z-index: 1;
    /* esto es para que esté siempre encima :D */
    }

    @media (min-width: 640px){
    .extra-nav {
        width: 100%;
        border-radius: 0 0 1rem 0;
        opacity: 1;
        left: 0;
    }
    }

</style>