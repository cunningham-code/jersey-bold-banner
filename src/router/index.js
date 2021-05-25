import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import How from '../views/info/How.vue'
import What from '../views/info/What.vue'
import Why from '../views/info/Why.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/how',
    name: 'How',
    component: How
  },
   {
    path: '/what',
    name: 'What',
    component: What
  },
   {
    path: '/why',
    name: 'Why',
    component: Why
  }
]

const router = new VueRouter({
  routes
})

export default router
