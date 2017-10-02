<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <router-link id="logo" to="/" class="navbar-item">
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
#logo {
  font-weight: 900;
  font-family: 'Kopub Batang';
}
#logo.is-active, #logo:hover {
  background-color: white;
}
</style>
