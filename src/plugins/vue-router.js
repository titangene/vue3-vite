import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/root/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/modules/about/AboutView.vue')
    }
  ]
});

export default router;
