import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'  
import UserLogin from '../components/UserLogin.vue'
import index from '@/views/HomePage.vue'

const routes = [
  {path: '/',name:'home',component: index},
  {path: '/login',name:'login',component: UserLogin},
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
