import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: import('../views/ComponentA.vue')
  },
  {
    path: '/component-b',
    component: import('../views/ComponentB.vue')
  },
  {
    path: '/component-c/:id',
    component: import('../views/ComponentC.vue')
  },
  {
    path: '/component-d/:id',
    component: import('../views/ComponentD.vue')
  },
  {
    path: '/component-e',
    component: import('../views/ComponentE.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
