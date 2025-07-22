<template>
  <div>
    <Hero />
    <section id="proyectos"><Proyectos /></section>
    <section id="habilidades"><Habilidades /></section>
    <section id="contacto"><Contactobtn /></section>
    <section id="experiencia"><Experiencia /></section>
    <section id="carta"><Carta /></section>
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue'
import Proyectos from './components/Proyectos.vue'
import Habilidades from './components/Habilidades.vue'
import Contactobtn from './components/Contactobtn.vue'
import Experiencia from './components/Experiencia.vue'
import Carta from './components/Carta.vue'
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #1a0033;
  margin: 0 !important;
  padding: 0 !important;
  color: #e0c3fc;
}
</style>