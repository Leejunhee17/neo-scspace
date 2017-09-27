<i18n src="./../../locales/general.yaml"></i18n>
<i18n>
ko:
  my-recent-reservation: "내 최근 예약"
en:
  my-recent-reservation: "My Recent Reservation"
</i18n>
<template>
  <article class="tile is-child notification">
    <h2 class="title is-3"> {{ $t('my-recent-reservation', language) }} </h2>
    <ul>
      <li><a> 내일 미래홀 </a></li>
      <li><a> 글피 피아노실 </a></li>
    </ul>
    <router-link to="/reservation" class="button is-link is-pulled-right"> {{ $t('more', language) }} </router-link>
    <div class="is-clearfix"></div>
  </article>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>