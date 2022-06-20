import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/pula',
    name: 'pula',
    component: () => import(/* webpackChunkName: "pula" */ '../views/PulaInfo.vue')
  },
  {
    path: '/rovinj',
    name: 'rovinj',
    component: () => import(/* webpackChunkName: "pula" */ '../views/RovinjInfo.vue')
  },
  {
    path: '/umag',
    name: 'umag',
    component: () => import(/* webpackChunkName: "pula" */ '../views/UmagInfo.vue')
  },
  {
    path: '/labin',
    name: 'labin',
    component: () => import(/* webpackChunkName: "pula" */ '../views/LabinInfo.vue')
  },
  {
    path: '/pazin',
    name: 'pazin',
    component: () => import(/* webpackChunkName: "pula" */ '../views/PazinInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
