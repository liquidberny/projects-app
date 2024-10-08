import { createRouter, createWebHistory } from 'vue-router';
import ProyectsLayout from '@/modules/projects/layouts/ProyectsLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'projects' },
      component: ProyectsLayout,
      children: [
        {
          path: 'projects',
          name: 'projects',
          //manera presoza de cargar componentes
          component: () => import('@/modules/projects/views/ProjectsView.vue'),
        },
        {
          path: 'project/:id',
          name: 'project',
          props: true,
          //manera presoza de cargar componentes
          component: () => import('@/modules/projects/views/ProjectView.vue'),
        },
      ],
    },
  ],
});

export default router;
