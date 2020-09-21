import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Transcript Processing Application - Dashboard',
    },
  },
  // {
  //   name: 'Login',
  //   path: '/auth/signin',
  //   component: () => import(/* webpackChunkName: "signin" */ '@/views/Signin.vue'),
  //   meta: {
  //     title: 'Transcript Processing Application - Login',
  //   },
  // },
  {
    path: '/work-queues',
    name: 'Work Queues',
    component: () => import(/* webpackChunkName: "workQueues" */ '@/views/WorkQueues.vue'),
  },
  // {
  //   path: '*',
  //   redirect: '/auth/signin',
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
