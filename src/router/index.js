import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "../views/Login.vue";
import PulaInfo from "../views/PulaInfo.vue";
import RovinjInfo from "../views/RovinjInfo.vue";
import UmagInfo from "../views/UmagInfo.vue";
import LabinInfo from "../views/LabinInfo.vue";
import PazinInfo from "../views/PazinInfo.vue";
import Redomat from "../views/Redomat.vue";

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
    component: Login
  },
  {
    path: '/pula',
    name: 'pula',
    component: PulaInfo
  },
  {
    path: '/rovinj',
    name: 'rovinj',
    component: RovinjInfo
  },
  {
    path: '/umag',
    name: 'umag',
    component: UmagInfo
  },
  {
    path: '/labin',
    name: 'labin',
    component: LabinInfo
  },
  {
    path: '/pazin',
    name: 'pazin',
    component: PazinInfo
  },
  {
    path: '/Redomat',
    name: 'Redomat',
    component: Redomat
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
