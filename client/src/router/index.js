import { createRouter, createWebHistory } from 'vue-router'
import Search from '../components/Search.vue'
import Profile from '../components/Profile.vue'

const routes = [
  {
   path: '/',
   name: 'search',
   component: Search
  },
  {
    path: '/profile/:platform/:gamertag',
    name: 'profile',
    component: Profile
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
