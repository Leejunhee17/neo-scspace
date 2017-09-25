// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import calendar from 'vue-full-calendar'
import axios from 'axios'
import jquery from 'jquery'

import App from './App'
import router from './router'
import store from './store'

window.jQuery = jquery
window.$ = jquery

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(calendar)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
