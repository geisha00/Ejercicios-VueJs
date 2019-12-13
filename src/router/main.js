import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new Router({
  routes: [
    {
      path: '/juegos',
      name: 'juegos',
      component: () => import('../components/juegos.vue'),
    },
    {
      path: '/randomuser',
      name: 'randomuser',
      component: () => import('@/components/randomuser.vue'),
    },
  ],
});