<i18n src="./../../locales/general.yaml"></i18n>
<i18n>
ko:
  advertisement: "광고"
en:
  advertisement: "Advertisement"
</i18n>
<template>
  <aside class="tile is-child notification">
    <p class="title"> {{ $t('advertisement', language) }} </p>
  </aside>
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
