<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <router-link to="/poster" class="navbar-item">
    {{ $t('poster', language) }}
  </router-link>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {...mapState(['language'])}
}
</script>

<style>

</style>
