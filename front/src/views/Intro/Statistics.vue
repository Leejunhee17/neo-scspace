<template>
  <div class="container">
    <section class="section">
      <h1 class="title"> {{ $t('statistics', this.language) }} </h1>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  metaInfo () {
    return {
      title: this.$t('statistics', this.language)
    }
  },
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>
