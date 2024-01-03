import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '../views/Index.vue';
import Add from '../views/Add.vue';
import Edit from '../views/Edit.vue';
import Portfolio from '../views/Portfolio.vue';
import Buy from '../views/Buy.vue';
import Sell from '../views/Sell.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Index',
    path: '/',
    component: Index,
  },
  {
    name: 'Add',
    path: '/add',
    component: Add,
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit,
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    component: Portfolio,
  },
  {
    name: 'Buy',
    path: '/buy/:id',
    component: Buy,
  },
  {
    name: 'Sell',
    path: '/sell/:id',
    component: Sell,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
