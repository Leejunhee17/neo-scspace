<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
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