<i18n src="./../../locales/general.yaml"></i18n>
<i18n>
ko:
  todays-event: "오늘"
en:
  todays-event: "Today"
</i18n>
<template>
  <div class="container">
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <notice-card />
              <today-card />
            </div>
            <div class="tile is-parent">
              <advertisement-card />
            </div>
          </div>
          
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <h2 class="title is-3"> {{ $t('recent-photo', language) }} </h2>
              <img src="http://bulma.io/images/placeholders/640x360.png">
            </article>
          </div>
        </div>
        
        <div class="tile is-parent">
          <recent-reservation-card />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import NoticeCard from './NoticeCard'
import TodayCard from './TodayCard'
import AdvertisementCard from './AdvertisementCard'
import RecentReservationCard from './RecentReservationCard'

export default {
  components: { NoticeCard, TodayCard, AdvertisementCard, RecentReservationCard },
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style scoped>
.notification {
  padding-right: 1.25rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  /* transition: all 0.3s cubic-bezier(.25,.8,.25,1); */
}

/* .notification:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
} */
</style>
