<template>
  <div class="container">
    <section class="section">
      <calendar :space="'piano-room-1'"/>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calendar from '../../components/Calendar/Calendar'

export default {
  components: { Calendar },
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>
