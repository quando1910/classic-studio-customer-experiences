import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import Viewer from '@/components/pages/viewer'
import Contract from '@/components/pages/contracts'
import ListUse from '@/components/pages/list-user'
import InfoUse from '@/components/pages/info-user'

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

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  linkExactActiveClass: 'is-active',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/viewer', component: Viewer,
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
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
