<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <p>{{ $t('dance-studio', language) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'intro-dance-studio',
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>
