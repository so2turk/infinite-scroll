import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/numbers',
    name: 'Numbers',
    component: () => import('../views/numbers.vue'),
  },
  {
    path: '/colors',
    name: 'Colors',
    component: () => import('../views/colors.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
