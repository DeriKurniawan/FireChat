import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Forum from '@/components/Forum'

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
    }
  ]
})
