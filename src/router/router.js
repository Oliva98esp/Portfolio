import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/:catchAll(.*)?',
    component: App
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  }
})

export default router