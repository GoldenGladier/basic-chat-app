import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacts/:username',
    name: 'Contacts',
    props: true,
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },    
  // {
  //   path: '/chat/:addressee/:id',
  //   name: 'Chat',
  //   props: true,
  //   component: () => import(/* webpackChunkName: "chat" */ '../views/Chat-Messages.vue')
  // },
  {
    path: '/chat/:username',
    name: 'Chat',
    props: true,
    component: () => import(/* webpackChunkName: "chat" */ '../views/Chat-Messages.vue')
  }    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
