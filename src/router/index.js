import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: 'login'
  },{
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },{
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },{
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },{
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
