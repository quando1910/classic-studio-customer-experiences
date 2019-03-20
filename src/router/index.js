import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import Login from '@/components/pages/login/login'
import Viewer from '@/components/pages/viewer/viewer'
import Contract from '@/components/pages/viewer/contracts'
import ListUse from '@/components/pages/viewer/list-user'
import InfoUse from '@/components/pages/viewer/info-user'
import { AuthService } from "../service/authService";

import Inventory from '@/components/pages/inventory/inventory'
import Status from '@/components/pages/inventory/status'


// const Showrooms = () => import(/* webpackChunkName: "group-news" */ '@/components/showrooms.vue')
// const Preview = () => import(/* webpackChunkName: "group-news" */ '@/components/post/post-preview')
// const AddPost = () => import(/* webpackChunkName: "group-news" */ '@/components/post/add-post')
// const Popular = () => import(/* webpackChunkName: "group-popular" */ '@/components/popular')
// const SubDetail = () => import(/* webpackChunkName: "group-details" */ '@/components/sub-detail')
// const MainDetail = () => import(/* webpackChunkName: "group-details" */ '@/components/main-detail')
// const GalleryBox = () => import(/* webpackChunkName: "group-details" */ '@/components/gallery-box')
// const Info = () => import(/* webpackChunkName: "group-details" */ '@/components/info')
// const AuthLogin = () => import(/* webpackChunkName: "group-auth" */ '@/components/auth/auth-login')
// const AuthSignUp = () => import(/* webpackChunkName: "group-auth" */ '@/components/auth/auth-signup')
// const Suggestion = () => import(/* webpackChunkName: "group-suggest" */ '@/components/suggestion')

const auth = new AuthService();
Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  linkExactActiveClass: 'activated',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: auth.ifNotAuthenticated,

    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/inventory',
      component: Inventory,
      beforeEnter: auth.ifAuthenticated,
      children: [
        {
          path: 'status', component: Status,
        },
      ]
    },
    {
      path: '/viewer', component: Viewer,
      beforeEnter: auth.ifAuthenticated,
      children: [
        {
          path: 'contract', component: Contract,
        },
        {
          path: 'list-use', component: ListUse,
        },
        {
          path: 'info-user', component: InfoUse,
        }
      ]
    },
  ]
})

export default router
