<template>
  <div id="app">
    <app-navbar />
    <router-view />
    <!-- <div class="container"></div> -->
    <app-footer />
  </div>
</template>

<script>
import appNavbar from './components/Navbar/Navbar'
import appFooter from './components/Footer/Footer'

/* eslint-disable no-unused-vars */
import fontawesome from 'font-awesome/css/font-awesome.css'

export default {
  name: 'app',
  components: {
    appNavbar, appFooter
  },
  data () {
    return {
      events: [
        {
          title: '이벤트',
          start: '2017-09-14'
        },
        {
          title: '이벤트2',
          start: '2017-09-14',
          end: '2017-09-21'
        },
        {
          title: 'event3',
          start: '2017-09-05T12:30:00',
          allDay: false
        }
      ]
    }
  },
  methods: {
    drop () {
      // alert('droped');
    }
  }
}
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  
  $primary: #ffb3b3;
  $link-hover: darken($primary, 14%);

  $navbar-tab-hover-border-bottom-color: $black;
  $navbar-tab-active-color: $black;
  $navbar-tab-active-border-bottom-color: $black;
  $navbar-tab-active-border-bottom-width: 2px;

  @import "~bulma";
  @import "~fullcalendar/dist/fullcalendar.css";
  @import "./assets/fonts/KoPub Batang.css";
</style>
