import { createRouter, createWebHistory } from 'vue-router'
import catalogViewVue from '@/views/catalog-view.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'catalog',
      component: catalogViewVue
    }, 
  ]
})

export default router
