<i18n src="./../../locales/general.yaml"></i18n>
<i18n>
ko:
  todays-event: "오늘"
en:
  todays-event: "Today"
</i18n>
<template>
  <div class="container">
    <figure class="image is-16by9">
      <img src="../../assets/community_yard.jpg" alt="장영신학생회관 커뮤니티 마당 행사 풍경">
    </figure>
    <div class="columns">
      <div class="column">
        <div class="card notification">
          <h1 class="title">{{ $t('notice', language) }}</h1>
          <ul>
            <li>무예실 정기예약 추첨 결과</li>
            <li>다용도실 사용 규칙 변경 안내</li>
            <li>무예실 정기예약 일정 안내</li>
          </ul>
        </div>
      </div>
      <div class="column"></div>
    </div>
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
  margin: 1rem 0;
  padding-right: 1.25rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  background-color: #fcfcfc;
}

@media screen and (min-width: 768px) {
  .notification {
    padding: 6rem;
  }
} 

.notification:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.notification h1 {
  font-family: 'Kopub Batang';
}
</style>
