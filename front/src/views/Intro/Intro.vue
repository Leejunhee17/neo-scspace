<template>
  <div>
    <div class="container">
      <section class="section">
        <component :is="space"/>
        <!-- <full-calendar :events="events" :config="{locale:'ko'}" @event-created="drop" /> -->
      </section>
    </div>
  </div>
</template>

<script>
import individualPracticeRoom from './spaces/individual-practice-room'

export default {
  props: ['space'],
  components: {
    individualPracticeRoom
  }
}
</script>

<style>

</style>
