import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: 'login'
  },{
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '/home/chat',
        name: 'chat',
        component: () => import('../views/ChatView.vue'),
        children: [
          {
            path: '/home/chat/chat',
            name: 'contact',
            component: () => import('../components/chatList/ChatList.vue'),
          }
        ]
      },{
        path: '/home/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue'),
        children: [
          {
            path: '/home/contact/contact',
            name: 'friend',
            component: () => import('../components/contactList/ContactList.vue'),
          }
        ]
      }
    ]
  },{
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },{
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
