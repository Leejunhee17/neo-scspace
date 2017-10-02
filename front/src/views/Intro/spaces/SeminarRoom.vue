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
  metaInfo () {
    return {
      title: this.$t('seminar-room', this.language)
    }
  },
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>