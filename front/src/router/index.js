import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import Login from '@/views/Login/Login'
import Setting from '@/views/Setting/Setting'
import Intro from '@/views/Intro/Intro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/:space',
      name: 'SpaceIntro',
      component: Intro,
      props: true
    }
  ]
})
