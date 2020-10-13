import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "[request]" */ '@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import(/* webpackChunkName: "[request]" */ '@/layouts/MainLayout.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import(/* webpackChunkName: "[request]" */ 'pages/Error404.vue'),
  },
];

export default routes;
