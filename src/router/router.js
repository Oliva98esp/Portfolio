
import { createRouter, createWebHistory } from 'vue-router';
import Hero from '../components/Hero.vue';
import Proyectos from '../components/Proyectos.vue';
import Habilidades from '../components/Habilidades.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Hero,
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: Proyectos,
  },
  {
    path: '/habilidades',
    name: 'Habilidades',
    component: Habilidades,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
