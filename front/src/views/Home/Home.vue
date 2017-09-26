<i18n src="./../../locales/general.yaml"></i18n>
<i18n>
ko:
  advertisement: "광고"
  todays-event: "오늘의 행사"
  my-recent-reservation: "내 최근 예약"
  recent-photo: "최근 사진"
en:
  advertisement: "Advertisement"
  todays-event: "Today's Event"
  my-recent-reservation: "My Recent Reservation"
  recent-photo: "Recent Photo"
</i18n>
<template>
  <div class="container">
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-warning">
                <h2 class="title is-3"> {{ $t('notice', language) }} </h2>
                <ul>
                  <li><a> 신학관 반상회 </a></li>
                  <li><a> 축제기간 책다방 상근 </a></li>
                  <li><a> 무예실 정기예약 추첨 </a></li>
                </ul>
                <router-link to="/notice" class="button is-warning is-link is-pulled-right"> {{ $t('more', language) }} </router-link>
                <div class="is-clearfix"></div>
              </article>
              <article class="tile is-child notification is-success">
                <h2 class="title is-3"> {{ $t('todays-event', language) }} </h2>
                <ul>
                  <li><a> 넘버의 뮤지컬 "모모" </a></li>
                  <li><a> 카포전 </a></li>
                </ul>
                <!-- <button class="button is-success is-link is-pulled-right"> {{ $t('more', language) }} </button> -->
                <div class="is-clearfix"></div>
              </article>
            </div>
            <div class="tile is-parent">
              <aside class="tile is-child notification is-primary">
                <p class="title"> {{ $t('advertisement', language) }} </p>
              </aside>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <h2 class="title is-3"> {{ $t('recent-photo', language) }} </h2>
              <img src="http://bulma.io/images/placeholders/640x360.png">
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <h2 class="title is-3"> {{ $t('my-recent-reservation', language) }} </h2>
                <ul>
                  <li><a> 내일 미래홀 </a></li>
                  <li><a> 글피 피아노실 </a></li>
                </ul>
                <router-link to="/reservation" class="button is-info is-link is-pulled-right"> {{ $t('more', language) }} </router-link>
                <div class="is-clearfix"></div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style scoped>
.notification {
  padding-right: 1.25rem;
}
</style>
