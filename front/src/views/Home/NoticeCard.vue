<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <article class="tile is-child notification">
    <h2 class="title is-3"> {{ $t('notice', language) }} </h2>
    <ul>
      <li><a> 신학관 반상회 </a></li>
      <li><a> 축제기간 책다방 상근 </a></li>
      <li><a> 무예실 정기예약 추첨 </a></li>
    </ul>
    <router-link to="/notice" class="button is-link is-pulled-right"> {{ $t('more', language) }} </router-link>
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
