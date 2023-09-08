const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
