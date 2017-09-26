<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <p>{{ $t('open-space', language) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'intro-open-space',
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>