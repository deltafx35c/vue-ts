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
          path: '/page0',
          name: 'page0',
          component: () => import('./views/pages/Page0.vue'),
        },
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
        {
          path: '/page5',
          name: 'page5',
          component: () => import('./views/pages/Page5.vue'),
        },
        {
          path: '/page6',
          name: 'page6',
          component: () => import('./views/pages/Page6.vue'),
        },
        {
          path: '/page7',
          name: 'page7',
          component: () => import('./views/pages/Page7.vue'),
        },
        {
          path: '/page8',
          name: 'page8',
          component: () => import('./views/pages/Page8.vue'),
        },
        {
          path: '/page9',
          name: 'page9',
          component: () => import('./views/pages/Page9.vue'),
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
