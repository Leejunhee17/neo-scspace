<template>
  <div>
    <div class="container">
      <section class="section">
        <component :is="toComponent(space)"/>
        <!-- <full-calendar :events="events" :config="{locale:'ko'}" @event-created="drop" /> -->
      </section>
    </div>
  </div>
</template>

<script>
import individualPracticeRoom from './spaces/individual-practice-room'

export default {
  props: ['space'],
  methods: {
    toComponent (space) {
      return {
        개인연습실: 'individualPracticeRoom'
      }[space]
    }
  },
  components: {
    individualPracticeRoom
  }
}
</script>

<style>

</style>
