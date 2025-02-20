import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/pages/AppHome.vue'
import AppProfile from '@/pages/AppProfile.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/user/:id', component: AppProfile },
]
const router = createRouter({ history: createWebHistory(), routes })

export default router
