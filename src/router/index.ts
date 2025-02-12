import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import UserLogin from '../views/UserLogin.vue';
import HomePage from '../views/HomePage.vue';
import ListEmployees from '../views/ListEmployees.vue';
import EditEmployee from '../views/EditEmployee.vue';
import RegisterUser from '@/views/RegisterUser.vue';
import addEmployee from '@/views/addEmployee.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: UserLogin },
  { path: '/servidores', name: 'servidores', component: ListEmployees },
  { 
    path: '/servidores/edit/:id', 
    name: 'edit-employee', 
    component: EditEmployee, 
    meta: { requiresAuth: true }
  },
  { 
    path: '/registrar', 
    name: 'registrar', 
    component: RegisterUser 
  },
  { 
    path: '/adicionar-servidor', 
    name: 'adicionar', 
    component: addEmployee, 
    meta: { requiresAuth: true } 
  }
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});


function isAuthenticated() {
  return !!localStorage.getItem('authToken'); 
}


router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'login' }); 
  } else {
    next(); 
  }
});

export default router;

