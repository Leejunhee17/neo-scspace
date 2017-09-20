<template>
  <router-link to="/reservation" class="navbar-item">
    <div class="navbar-content">
      <small class="notification-date"> 내일 &#183; <span class="has-text-success"> 승인됨 </span></small> <br />
      <div> {{ title }} </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    },
    state: {
      validator (state) {
        return ['grant', 'reject', 'wait'].includes(state)
      }
    }
  }
}
</script>

<style>

</style>
