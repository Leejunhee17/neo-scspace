import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import Login from '@/views/Login/Login'
import Settings from '@/views/Settings/Settings'
import SpaceIntro from '@/views/Intro/Intro'

Vue.use(Router)

const spaces = 'workshop|bookdabang|piano-room|individual-practice-room|seminar-room|multipurpose-room|dance-studio|group-practice-room|ullim-hall|mirae-hall|open-space'

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
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: `/:space(${spaces})`,
      name: 'SpaceIntro',
      component: SpaceIntro,
      props: true
    }
  ]
})
