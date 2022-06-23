import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/prijava',
    name: 'prijava',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "prijava" */ '../views/Login.vue')
  },
  {
    path: '/pula',
    name: 'pula',
    component: () => import(/* webpackChunkName: "pula" */ '../views/PulaInfo.vue')
  },
  {
    path: '/rovinj',
    name: 'rovinj',
    component: () => import(/* webpackChunkName: "rovinj" */ '../views/RovinjInfo.vue')
  },
  {
    path: '/umag',
    name: 'umag',
    component: () => import(/* webpackChunkName: "umag" */ '../views/UmagInfo.vue')
  },
  {
    path: '/labin',
    name: 'labin',
    component: () => import(/* webpackChunkName: "labin" */ '../views/LabinInfo.vue')
  },
  {
    path: '/pazin',
    name: 'pazin',
    component: () => import(/* webpackChunkName: "pazin" */ '../views/PazinInfo.vue')
  },
  {
    path: '/Redomat',
    name: 'Redomat',
    component: () => import(/* webpackChunkName: "Redomat" */ '../views/Redomat.vue')
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
