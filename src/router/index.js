// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../assets/views/Home.vue'
import Register from "../assets/views/RegisterView.vue"
import Login from "../assets/views/LoginView.vue"
import Header from "../assets/views/HeaderView.vue"
import Crypto from "../components/PageAcceuilCryptographie.vue"
import Chiffrement from "../components/cryptagePageComponent.vue"

const routes = [
  {
    path: '/test',
    name: 'Header',
    component: Header,
    redirect: { name: 'Home' },
    children:[
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
    ]
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
  {
    path: '/',
    name: 'Crypto',
    component: Crypto
  },
  {
    path: '/chiffrement',
    name: 'Chiffrement',
    component: Chiffrement
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
