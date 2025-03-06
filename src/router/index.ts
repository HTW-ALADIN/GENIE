import { createRouter, createWebHistory } from 'vue-router'
import Test from '@/views/Test.vue'
import GeneratorDesigner from '@/views/GeneratorDesigner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Test
    },
    {
      path: '/generator',
      name: 'generator',
      component: GeneratorDesigner
    },
    {
      path: '/ui',
      name: 'ui',
      component: GeneratorDesigner
    },
    {
      path: '/settings',
      name: 'settings',
      component: GeneratorDesigner
    }
  ]
})

export default router
