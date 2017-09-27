<i18n src="./../../locales/general.yaml"></i18n>
<i18n>
ko:
  todays-event: "오늘"
en:
  todays-event: "Today"
</i18n>
<template>
  <article class="tile is-child notification">
    <h2 class="title is-3"> {{ $t('todays-event', language) }} </h2>
    <ul>
      <li><a> 넘버의 뮤지컬 "모모" </a></li>
      <li><a> 카포전 </a></li>
    </ul>
    <!-- <button class="button is-success is-link is-pulled-right"> {{ $t('more', language) }} </button> -->
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
