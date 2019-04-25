import Vue from 'vue';
import Router from 'vue-router';
import BaseLayout from './views/BaseLayout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'baseLayout',
      component: BaseLayout,
      redirect: 'login',
      children: [
        {
          path: '/page1',
          name: 'page1',
          component: () => import('./views/pages/Page1.vue'),
        },
        {
          path: '/page2',
          name: 'page2',
          component: () => import('./views/pages/Page2.vue'),
        },
        {
          path: '/page3',
          name: 'page3',
          component: () => import('./views/pages/Page3.vue'),
        },
        {
          path: '/page4',
          name: 'page4',
          component: () => import('./views/pages/Page4.vue'),
        },
      ],
    },
    {
      path: '/blankLayout',
      name: 'blankLayout',
      component: () => import('./views/BlankLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/pages/Login.vue'),
        },
      ],
    },
    {
      path: '/login',
      redirect: 'login',
    },
  ],
});
