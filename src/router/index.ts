import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import env from '@/api/config/environment'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { requiresAuth: true },
    component: () => import('../views/dashboard/Dashboard.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { requiresAuth: true },
    component: () => import('../views/profile/Profile.vue')
  },
  {
    path: '/profile/detail',
    name: 'Detail',
    meta: { requiresAuth: true },
    component: () => import('../views/profile/Detail.vue'),
    props: true
  },
  {
    path: '/apply',
    name: 'Apply',
    meta: { requiresAuth: true },
    component: () => import('../views/apply/Apply.vue')
  },
  {
    path: '/apply/personalData',
    name: 'PersonalData',
    meta: { requiresAuth: true },
    component: () => import('../views/apply/PersonalData.vue'),
    props: true
  },
  {
    path: '/apply/requirements',
    name: 'ApplyRequirements',
    meta: { requiresAuth: true },
    component: () => import('../views/apply/ApplyRequirements.vue'),
    props: true
  },
  {
    path: '/apply/skills',
    name: 'ApplySkills',
    meta: { requiresAuth: true },
    component: () => import('../views/apply/ApplySkills.vue'),
    props: true
  },
  {
    path: '/apply/extra',
    name: 'ApplyExtra',
    meta: { requiresAuth: true },
    component: () => import('../views/apply/ApplyExtra.vue')
  },
  {
    path: '/apply/finish',
    name: 'ApplyFinish',
    meta: { requiresAuth: true },
    component: () => import('../views/apply/ApplyFinish.vue'),
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    meta: { requiresAuth: true },
    component: () => import('../views/create/Create.vue')
  },
  {
    path: '/create/generalParams',
    name: 'GeneralParams',
    meta: { requiresAuth: true },
    component: () => import('../views/create/GeneralParams.vue')
  },
  {
    path: '/create/requirements',
    name: 'CreationRequirements',
    meta: { requiresAuth: true },
    component: () => import('../views/create/CreationRequirements.vue')
  },
  {
    path: '/create/skills',
    name: 'CreationSkills',
    meta: { requiresAuth: true },
    component: () => import('../views/create/CreationSkills.vue')
  },
  {
    path: '/create/extra',
    name: 'CreationExtra',
    meta: { requiresAuth: true },
    component: () => import('../views/create/CreationExtra.vue')
  },
  {
    path: '/create/finish',
    name: 'CreationFinish',
    meta: { requiresAuth: true },
    component: () => import('../views/create/CreationFinish.vue'),
    props: true
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import('../views/error404/Error404.vue'),
    props: true
  }
]
const router = new VueRouter({
  mode: 'history',
  base: env.getEnvVariable('BASE_URL'),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!window.localStorage.getItem('tokenClient')) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
