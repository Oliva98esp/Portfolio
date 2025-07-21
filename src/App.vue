<template>
  <Hero />
  <Proyectos />
  <Habilidades />
  <Contactobtn />
</template>

<script setup>
import Hero from './components/Hero.vue';
import Proyectos from './components/Proyectos.vue';
import Habilidades from './components/Habilidades.vue';
import Contactobtn from './components/Contactobtn.vue';
</script>

<style scoped>

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #1a0033;
  margin: 0 !important;
  padding: 0 !important;
  color: #e0c3fc;
}
</style>
