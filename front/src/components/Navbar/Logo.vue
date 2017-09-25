<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <router-link to="/" class="navbar-item">
    <strong style="font-weight:900"> {{ $t('space-committee', language) }} </strong>
  </router-link>
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
