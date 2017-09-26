<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <p>{{ $t('workshop', language) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'intro-workshop',
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>