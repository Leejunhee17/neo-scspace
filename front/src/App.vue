<template>
  <div id="app">
    <navbar/>
    <router-view></router-view>
    <div class="container">
      <full-calendar :events="events" :config="{locale:'ko'}" @event-created="drop"></full-calendar>
    </div>
    <foot/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar';
import Foot from './components/Foot/Foot';

export default {
  name: 'app',
  components: {
    Navbar, Foot,
  },
  data() {
    return {
      events: [
        {
          title: '이벤트',
          start: '2017-09-14',
        },
        {
          title: '이벤트2',
          start: '2017-09-14',
          end: '2017-09-21',
        },
        {
          title: 'event3',
          start: '2017-09-05T12:30:00',
          allDay: false,
        },
      ],
    };
  },
  methods: {
    drop() {
      console.log('dropped');
    },
  },
};
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  $primary: #ffb3b3;
  @import "~bulma";
  @import '~fullcalendar/dist/fullcalendar.css';
</style>
