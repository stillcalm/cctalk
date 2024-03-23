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
            path: '/home/chat/contact',
            name: 'contact',
            component: () => import('../components/contactList/ContactList.vue'),
          }
        ]
      },{
        path: '/home/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue'),
        children: [
          {
            path: '/home/chat/friend',
            name: 'friend',
            component: () => import('../components/friendList/FriendList.vue'),
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
