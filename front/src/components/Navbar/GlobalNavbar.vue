<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <div id="nav-wrapper">
    <div id="global-nav" class="navbar">
      <div class="container">
        <div class="navbar-tabs" style="margin:0 auto;">
          <router-link to="/bookdabang" class="navbar-item is-tab"> {{ $t('bookdabang', language) }} </router-link>
          <router-link to="/workshop" class="navbar-item is-tab"> {{ $t('workshop', language) }} </router-link>
          <div class="navbar-item is-tab"
            :class="{'is-active':isIndividual, 'is-current-category':isCurrentIndividual}"
            @mouseover="unfold('individual')"
            @mouseout="fold()"
            @touch="toggleSubNav('individual')"> 
            {{ $t('individual-spaces', language) }} 
          </div>
          <div class="navbar-item is-tab"
            :class="{'is-active':isGroup, 'is-current-category':isCurrentGroup}"
            @mouseover="unfold('group')"
            @mouseout="fold()"
            @touch="toggleSubNav('group')"> {{ $t('group-spaces', language) }} </div>
          <div class="navbar-item is-tab"
            :class="{'is-active':isEvent, 'is-current-category':isCurrentEvent}"
            @mouseover="unfold('event')"
            @mouseout="fold()"
            @touch="toggleSubNav('event')"> {{ $t('event-spaces', language) }} </div>
          <router-link to="/poster" class="navbar-item is-tab"> {{ $t('poster', language) }} </router-link>
          <router-link to="/contact" class="navbar-item is-tab"> {{ $t('contact', language) }} </router-link>
        </div>
      </div>
    </div>
    <div id="sub-nav" class="navbar" 
      v-show="subNavVisibility"
      @mouseover="unfold()"
      @mouseout="fold()">
      <div class="container">
        <div class="navbar-tabs" style="margin:0 auto;">
          <template v-if="currentCategory === 'individual'">
          <router-link to="/piano-room" class="navbar-item"> {{ $t('piano-room', language) }} </router-link>
          <router-link to="/individual-practice-room" class="navbar-item"> {{ $t('individual-practice-room', language) }} </router-link>
          </template>
          <template v-else-if="currentCategory === 'group'">
          <router-link to="/seminar-room" class="navbar-item"> {{ $t('seminar-room', language) }} </router-link>
          <router-link :to="'/dance-studio'" class="navbar-item"> {{ $t('dance-studio', language) }} </router-link>
          <router-link :to="'/multipurpose-room'" class="navbar-item"> {{ $t('multipurpose-room', language) }} </router-link>
          <router-link to="/group-practice-room" class="navbar-item"> {{ $t('group-practice-room', language) }} </router-link>  
          </template>
          <template v-else-if="currentCategory === 'event'">
          <router-link :to="'/ullim-hall'" class="navbar-item"> {{ $t('ullim-hall', language) }} </router-link>
          <router-link :to="'/mirae-hall'" class="navbar-item"> {{ $t('mirae-hall', language) }} </router-link>
          <router-link :to="'/open-space'" class="navbar-item"> {{ $t('open-space', language) }} </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      subNavVisibility: false,
      currentCategory: ''
    }
  },
  computed: {
    ...mapState(['language']),
    isIndividual () { return ['/individual-practice-room', '/piano-room'].includes(this.$route.path) },
    isGroup () { return ['/seminar-room', '/multipurpose-room', '/dance-studio', '/group-practice-room'].includes(this.$route.path) },
    isEvent () { return ['/ullim-hall', '/mirae-hall', '/open-space'].includes(this.$route.path) },
    isCurrentIndividual () { return this.currentCategory === 'individual' && this.subNavVisibility },
    isCurrentGroup () { return this.currentCategory === 'group' && this.subNavVisibility },
    isCurrentEvent () { return this.currentCategory === 'event' && this.subNavVisibility }
  },
  methods: {
    fold (callSite) {
      this.subNavVisibility = false
    },
    unfold (currentCategory) {
      if (currentCategory) this.currentCategory = currentCategory
      this.subNavVisibility = true
    },
    toggleSubNav (currentCategory) {
      window.prompt('touched!')
      if (this.currentCategory === currentCategory) this.subNavVisibility = !this.subNavVisibility
      else this.currentCategory = currentCategory
    }
  },
  watch: {
    $route: function () {
      this.fold()
    }
  }
}
</script>

<style scoped>
#nav-wrapper {
  position: relative;
}

#sub-nav {
  position: absolute;
  top: 52px;
  width: 100%;
  z-index: 1;
  background-color: #f9f9f9;
  color: black;
}

#sub-nav .navbar-item.is-active {
  text-decoration: underline;
}

.navbar-tabs::-webkit-scrollbar { 
  display: none; 
}

.is-current-category {
  border-bottom: 1px solid black;
}
</style>
