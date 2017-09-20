<template>
  <div>
    <h1>소개</h1>
    <component :is="toComponent(space)"/>
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
