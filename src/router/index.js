import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Portfolio from '../components/pages/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({ y: 0 }), 
  routes
})

export default router
