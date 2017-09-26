<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <p>{{ $t('group-practice-room', language) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'intro-group-practice-room',
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>
