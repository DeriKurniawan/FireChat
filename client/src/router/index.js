import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Forum from '@/components/Forum'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import DetilNews from '@/components/DetilNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/forum/comment',
      name: 'DetilNews',
      component: DetilNews
    }
  ]
})
