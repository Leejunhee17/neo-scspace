<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <p>{{ $t('ullim-hall', language) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'intro-ullim-hall',
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>