import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'  
import UserLogin from '../views/UserLogin.vue'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: UserLogin },
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
