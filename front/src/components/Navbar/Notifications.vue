<template>
  <div class="navbar-item has-dropdown is-hoverable is-hidden-touch">
    <div id="notification-icon" class="navbar-link">
      <span class="icon danger">
        <i class="fa fa-bell"></i>
      </span>
    </div>
    <div class="navbar-dropdown is-boxed is-right">
      <notification v-for="n in 3" :key="n" :title="'피아노실 예약'" :state="'grant'" :timestamp="6"/>
      <router-link to="/reservation" class="navbar-item">
        더 보기
      </router-link>
    </div>
  </div>
</template>

<script>
import Notification from './Notification'
export default {
  components: { Notification }
}
</script>

<style scoped>
#notification-icon {
  padding-right: 0.5rem;
}

#notification-icon::after {
  display: none;
}

.notification-date {
  color: grey;
}
</style>
