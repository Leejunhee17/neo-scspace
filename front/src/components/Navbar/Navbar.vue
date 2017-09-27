<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
    <div class="container">
      <div class="navbar-brand">
        <logo />
        <mobile-notifications :mobileMenuVisibility="mobileMenuVisibility" />
        <button @click="toggleMenuVisibility" data-target="nav-menu" class="button navbar-burger" :class="{'is-active':mobileMenuVisibility}" style="border-color: transparent">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div class="navbar-menu" :class="{'is-active':mobileMenuVisibility}" id="nav-menu">
        <div class="navbar-start">
          <spaces />
          <poster />
        </div>
        <div class="navbar-end">
          <router-link to="/manage" class="navbar-item"> {{ $t('manage', language) }} </router-link>
          <a @click="toggleLanguage" class="navbar-item"><i class="fa fa-globe"/></a> <!-- Debuging -->
          <notifications />
          <settings />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'
import Spaces from './Spaces'
import Poster from './Poster'
import Notifications from './Notifications'
import MobileNotifications from './MobileNotifications'
import Settings from './Settings'

import { mapState, mapMutations } from 'vuex'

export default {
  components: { Logo, Spaces, Poster, Notifications, MobileNotifications, Settings },
  data () {
    return {
      mobileMenuVisibility: false
    }
  },
  computed: {...mapState(['language'])},
  methods: {
    ...mapMutations(['toggleLanguage']),
    toggleMenuVisibility () {
      this.mobileMenuVisibility = !this.mobileMenuVisibility
    },
    hideMenu () {
      this.mobileMenuVisibility = false
    }
  },
  watch: {
    $route: function () {
      this.hideMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-burger {
  margin-left: 0;
  // color: white;
  // background-color: rgb(255, 56, 96);
}
</style>
