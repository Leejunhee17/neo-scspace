<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <nav>
    <div class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
      <div class="container">
        <div class="navbar-brand">
          <div class="is-hidden-touch" :style="{paddingLeft: leftBlankWidth + 'px'}"></div>
          <logo />
          <mobile-notifications :mobileMenuVisibility="mobileMenuVisibility" />
          <button @click="toggleMenuVisibility" data-target="nav-menu" class="button navbar-burger" :class="{'is-active':mobileMenuVisibility}" style="border-color: transparent">
            <span />
            <span />
            <span />
          </button>
        </div>
        <div class="navbar-menu" :class="{'is-active':mobileMenuVisibility}" id="nav-menu">
          <div class="navbar-end">
            <!-- <router-link to="/manage" class="navbar-item"> {{ $t('manage', language) }} </router-link> -->
            <a @click="toggleLanguage" class="navbar-item is-hidden-touch"><i class="fa fa-globe" /></a>
            <notifications />
            <settings />
          </div>
        </div>
      </div>
    </div>
    <global-navbar />
  </nav>
</template>

<script>
import Logo from './Logo'
import GlobalNavbar from './GlobalNavbar'
import Poster from './Poster'
import Notifications from './Notifications'
import MobileNotifications from './MobileNotifications'
import Settings from './Settings'

import { mapState, mapMutations } from 'vuex'

export default {
  components: { Logo, GlobalNavbar, Poster, Notifications, MobileNotifications, Settings },
  data () {
    return {
      mobileMenuVisibility: false,
      leftBlankWidth: 0
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
  mounted () {
    this.leftBlankWidth = document.getElementById('nav-menu').offsetWidth
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

.navbar-brand {
  flex-grow: 1;
  justify-content: center;
}

.navbar-menu {
  flex-grow: 0;
}
</style>
