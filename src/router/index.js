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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacts/:username',
    name: 'Contacts',
    props: true,
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },    

  {
    // path: '/chat/:username',
    path: '/chat',
    name: 'Chat',
    props: true,
    component: () => import(/* webpackChunkName: "chat" */ '../views/Chat-Messages.vue'),
    meta: {
      requiresAuth: true
    },
  }    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged( (user) => {
      if (!user) next('/')
      else next();
    })
  } else next()
});

export default router
