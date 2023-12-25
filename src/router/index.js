import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/index.vue';
import Services from '@/views/services.vue';
import About from '@/views/about_us.vue';
import Team from '@/views/team.vue';
import Projects from '@/views/projects/index.vue';
import Detail from '@/views/projects/[id].vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      }, {
        path: '/services',
        name: 'services',
        component: Services,
      }, {
        path: '/about_us',
        name: 'about',
        component: About,
      }, {
        path: '/team',
        name: 'team',
        component: Team,
      }, {
        path: '/projects',
        name: 'projects',
        component: Projects,
      }, {
        path: '/projects/:id',
        name: 'detail',
        component: Detail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
	routes,
});

export default router;