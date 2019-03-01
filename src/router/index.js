import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import Viewer from '@/components/pages/viewer.vue'

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
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/viewer'
    },
    {
      path: '/viewer',
      name: 'Viewer',
      component: Viewer
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
