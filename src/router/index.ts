import { createRouter, createWebHistory } from 'vue-router';
import ProyectsLayout from '@/modules/projects/layouts/ProyectsLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProyectsLayout,
    },
  ],
});

export default router;
