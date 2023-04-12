import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/zegar',
      name: 'clock',
      component: () => import('../views/ClockView.vue')
    },
    {
      path: '/licytacja',
      name: 'licitation',
      component: () => import('../views/LicitationView.vue')
    },
    {
      path: '/system',
      name: 'system',
      component: () => import('../views/SystemView.vue')
    }
  ]
})

export default router
