import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Home'
import Login from '@/views/Login/Login'
import Notice from '@/views/Notice/Notice'
import Poster from '@/views/Poster/Poster'
import Settings from '@/views/Settings/Settings'

import MyTeam from '@/views/Team/Team'
import Reserve from '@/views/Reservation/Reserve'
import MyReservation from '@/views/Reservation/MyReservation'

import CommitteeIntro from '@/views/Intro/Committee'
import BusinessIntro from '@/views/Intro/Business'
import CenterIntro from '@/views/Intro/Center'
import HistoryIntro from '@/views/Intro/History'
import StatisticsIntro from '@/views/Intro/Statistics'
import SpaceIntro from '@/views/Intro/Space'

import Manage from '@/views/Manage/Manage'

import PageNotFound from '@/views/misc/PageNotFound'

Vue.use(Router)

const spaces = 'workshop|bookdabang|piano-room|individual-practice-room|seminar-room|multipurpose-room|dance-studio|group-practice-room|ullim-hall|mirae-hall|open-space'

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
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
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/poster',
      name: 'Poster',
      component: Poster
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/team',
      name: 'MyTeam',
      component: MyTeam
    },
    {
      path: '/reservation',
      name: 'MyReservation',
      component: MyReservation
    },
    {
      path: '/reserve',
      name: 'Reserve',
      component: Reserve
    },
    {
      path: '/intro/committee',
      name: 'CommitteeIntro',
      component: CommitteeIntro
    },
    {
      path: '/intro/business',
      name: 'BusinessIntro',
      component: BusinessIntro
    },
    {
      path: '/intro/center',
      name: 'CenterIntro',
      component: CenterIntro
    },
    {
      path: '/intro/history',
      name: 'HistoryIntro',
      component: HistoryIntro
    },
    {
      path: '/intro/statistics',
      name: 'StatisticsIntro',
      component: StatisticsIntro
    },
    {
      path: `/:space(${spaces})`,
      name: 'SpaceIntro',
      component: SpaceIntro,
      props: true
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    { path: '*', component: PageNotFound }
  ]
})
