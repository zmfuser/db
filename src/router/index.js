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
    component: () => import( '../views/Home.vue')

  },
  {
    path: '/newItems',
    name: 'newItems',
    component: () => import( '../views/main/newItems.vue')
  },
  {
    path: '/Supervisorymatters',
    name: 'Supervisorymatters',
    component: () => import( '../views/Supervisorymatters/Supervisorymatters.vue')
  },
  {
    path: '/SupervisoryView',
    name: 'SupervisoryView',
    component: () => import( '../views/Supervisorymatters/SupervisoryView.vue')
  },
  {
    path: '/delaymatters',
    name: 'delaymatters',
    component: () => import( '../views/Delaymatters/Delaymatters.vue')
  },
  {
    path: '/examination_atters',
    name: 'examination_atters',
    component: () => import( '../views/ExaminationMatters/ExaminationMatters.vue')
  },
  {
    path: '/ItemsReview',
    name: 'ItemsReview',
    component: () => import( '../views/ExaminationMatters/ItemsReview.vue')
  },
  {
    path: '/ItemReviewDatil',
    name: 'ItemReviewDatil',
    component: () => import( '../views/ExaminationMatters/ItemReviewDatil.vue')
  },
  {
    path: '/ItemEvaluation',
    name: 'ItemEvaluation',
    component: () => import( '../views/ItemEvaluation/Itemevaluation.vue')
  },
  {
    path: '/ReportingMatters',
    name: 'ReportingMatters',
    component: () => import( '../views/ReportingMatters/ReportingMmatters.vue')
  },
  {
    path: '/ReportingMattersDital',
    name: 'ReportingMattersDital',
    component: () => import( '../views/ReportingMatters/ReportingMattersDital.vue')
  },
  {
    path: '/All',
    name: 'All',
    component: () => import( '../views/All/All.vue')
  },
  {
    path: '/DataKanban',
    name: 'DataKanban',
    component: () => import( '../views/DatKanban/DataKanban.vue')
  },
  {
    path: '/Supervisorymatters',
    name: 'Supervisorymatters',
    component: () => import( '../views/Supervisorymatters/Supervisorymatters.vue')
  },
  {
    path: '/PublicDetails',
    name: 'PublicDetails',
    component: () => import( '../components/PublicDetails.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
