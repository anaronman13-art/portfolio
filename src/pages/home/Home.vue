<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue';



</script>

<template>

<h1>Diseño web y apps interactivas</h1>

<div class="menu">
      <RouterLink to="/gallery">
        <Button>Galería</Button>
      </RouterLink>

      <RouterLink to="/contact">
        <Button>Contacto</Button>
      </RouterLink>

      <RouterLink to="/info">
        <Button>Información</Button>
      </RouterLink>
</div>

</template>

<style scoped>

</style>