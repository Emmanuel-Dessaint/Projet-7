import Vue from 'vue'
import VueRouter from 'vue-router'
import Connect from '../views/Connect.vue'
import Signup from '../views/Signup.vue'
import Pageprincipale from '../views/Pageprincipale.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Connect',
    component: Connect
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Accueil',
    name: 'Pageprincipale',
    component: Pageprincipale
  }
]

const router = new VueRouter({
  routes
})

export default router
