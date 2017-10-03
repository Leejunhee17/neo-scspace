<template>
  <div class="container">
    <section class="section">
      <calendar />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calendar from '../../components/Calendar'

export default {
  components: { Calendar },
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>

</style>
