import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'  
import UserLogin from '../views/UserLogin.vue'
import HomePage from '../views/HomePage.vue'
import ListEmployees from '../views/ListEmployees.vue'
import EditEmployee from '../views/EditEmployee.vue'
import RegisterUser from '@/views/RegisterUser.vue'
import AddEmployee from '@/views/addEmployee.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: UserLogin },
  { path: '/servidores', name: 'servidores', component: ListEmployees },
  { path: '/servidores/edit/:id', name: 'edit-employee', component: EditEmployee },
  { path: '/registrar', name: 'registrar', component: RegisterUser },
  { path: '/adicionar', name:'adicionar', component: AddEmployee}
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
