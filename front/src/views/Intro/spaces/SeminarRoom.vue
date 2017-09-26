<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <p>{{ $t('seminar-room', language) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'intro-seminar-room',
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>