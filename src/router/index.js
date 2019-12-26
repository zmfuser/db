import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')

  },
  {
    path: '/newItems',
    name: 'newItems',
    component: () => import(/* webpackChunkName: "about" */ '../views/main/newItems.vue')
  },
  {
    path: '/Supervisorymatters',
    name: 'Supervisorymatters',
    component: () => import(/* webpackChunkName: "about" */ '../views/Supervisorymatters/Supervisorymatters.vue')
  },
  {
    path: '/delaymatters',
    name: 'delaymatters',
    component: () => import(/* webpackChunkName: "about" */ '../views/Delaymatters/Delaymatters.vue')
  },
  {
    path: '/examination_atters',
    name: 'examination_atters',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExaminationMatters/ExaminationMatters.vue')
  },
  {
    path: '/ItemsReview',
    name: 'ItemsReview',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExaminationMatters/ItemsReview.vue')
  },
  {
    path: '/ItemEvaluation',
    name: 'ItemEvaluation',
    component: () => import(/* webpackChunkName: "about" */ '../views/ItemEvaluation/Itemevaluation.vue')
  },
  {
    path: '/ReportingMatters',
    name: 'ReportingMatters',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReportingMatters/ReportingMmatters.vue')
  },
  {
    path: '/All',
    name: 'All',
    component: () => import(/* webpackChunkName: "about" */ '../views/All/All.vue')
  },
  {
    path: '/DataKanban',
    name: 'DataKanban',
    component: () => import(/* webpackChunkName: "about" */ '../views/DatKanban/DataKanban.vue')
  },
]
export const asyncRouterMap = [
  {
    path: '/Supervisorymatters',
    name: 'Supervisorymatters',
    component: () => import('@/views/Supervisorymatters/Supervisorymatters.vue'),
    meta: {
      title: '督办事项',
      icon: 'nested'
    },
    children: [
      // {
      //   path: '/BsHealthGuard',
      //   name: '督办事项',
      //   component: () => import('./views/home/searchResult.vue'),
      //   meta: {
      //     title: '督办事项'
      //   }
      // },

    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...asyncRouterMap, ...routes]
})

export default router
