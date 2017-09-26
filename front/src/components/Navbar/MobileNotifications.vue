<template>
  <div class="dropdown is-right navbar-notification is-hidden-desktop" :class="{'is-active': mobileNotificationVisibility && !mobileMenuVisibility}">
    <div class="dropdown-trigger" @click="toggleNotificationVisibility">
      <div aria-haspopup="true">
        <span class="icon" style="margin: 14px 10px;">
          <i class="fa fa-bell" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <notification :title="'피아노실 예약'" :timestamp="201" v-for="n in 3" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
import Notification from './Notification'
export default {
  components: { Notification },
  props: ['mobileMenuVisibility'],
  data () {
    return {
      mobileNotificationVisibility: false
    }
  },
  methods: {
    toggleNotificationVisibility () {
      if (!this.mobileMenuVisibility) this.mobileNotificationVisibility = !this.mobileNotificationVisibility
    }
  },
  watch: {
    mobileMenuVisibility: function (newVal) {
      if (newVal === true) this.mobileNotificationVisibility = false
    }
  }
}
</script>

<style scoped>
.navbar-notification {
  margin-left: auto;
}

.navbar-notification .dropdown-trigger:focus, .navbar-notification .dropdown-trigger:hover {
  cursor: pointer;
  color: black;
}
</style>
