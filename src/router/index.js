// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../assets/views/Home.vue'
import Register from "../assets/views/RegisterView.vue"
import Login from "../assets/views/LoginView.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
