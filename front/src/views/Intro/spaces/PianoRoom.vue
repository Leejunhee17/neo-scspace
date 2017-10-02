<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <router-link to="/reserve" class="button is-primary">예약하기</router-link>
    <p>{{ $t('piano-room', language) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'intro-piano-room',
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>