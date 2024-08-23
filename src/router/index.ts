import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'main',
      path: '/',
      component: () => import('@/views/MainView.vue')
    },
    {
      name: 'book',
      path: '/book/:id',
      component: () => import('@/views/BookView.vue')
    },
    {
      name: 'my-books',
      path: '/my-books',
      component: () => import('@/views/MyBooks.vue'),
      meta: {
        requiredAuth: true
      }
    }
  ]
})

router.beforeEach((to) => {
  const user = useUserStore();

  if (to.meta.requiredAuth && !user.isAuthorized) {
    return '/'
  } 
});

export default router