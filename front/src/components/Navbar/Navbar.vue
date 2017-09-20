<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <strong style="font-weight:900"> {{ $t('space-committee') }} </strong>
        </router-link>
        <button @click="toggleMenuVisibility" class="button navbar-burger" :class="{'is-active':mobileMenuVisibility}" style="border-color: transparent">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{'is-active':mobileMenuVisibility}">
        <div class="navbar-start">
          
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
            {{ this.$t('individual-spaces') }}
            </div>
            <div class="navbar-dropdown is-boxed">
              <router-link :to="'/piano-room'" class="navbar-item">
                {{ this.$t('piano-room') }}
              </router-link>
              <router-link :to="'/individual-practice-room'" class="navbar-item">
                {{ this.$t('individual-practice-room') }}
              </router-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
            {{ this.$t('group-spaces') }}
            </div>
            <div class="navbar-dropdown is-boxed">
              <router-link :to="'/seminar-room'" class="navbar-item">
                {{ this.$t('seminar-room') }}
              </router-link>
              <router-link :to="'/multipurpose-room'" class="navbar-item">
                {{ this.$t('multipurpose-room') }}
              </router-link>
              <router-link :to="'/dance-studio'" class="navbar-item">
                {{ this.$t('dance-studio') }}
              </router-link>
              <router-link :to="'/group-practice-room'" class="navbar-item">
                {{ this.$t('group-practice-room') }}
              </router-link>
            </div>
          </div>
          
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
            {{ this.$t('event-spaces') }}
            </div>
            <div class="navbar-dropdown is-boxed">
              <router-link :to="'/ullim-hall'" class="navbar-item">
                {{ this.$t('ullim-hall') }}
              </router-link>
              <router-link :to="'/mirea-hall'" class="navbar-item">
                {{ this.$t('mirea-hall') }}
              </router-link>
              <router-link :to="'/open-space'" class="navbar-item">
                {{ this.$t('open-space') }}
              </router-link>
            </div>
          </div>

          <router-link :to="'/workshop'" class="navbar-item"> {{ $t('workshop') }} </router-link>
          <router-link :to="'/bookdabang'" class="navbar-item"> {{ $t('bookdabang') }} </router-link>

        </div>
        <div class="navbar-end">
          <!-- <router-link to="/manage" class="navbar-item"> {{ $t('manage') }} </router-link> -->
          
          <div class="navbar-item has-dropdown is-hoverable">
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

          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              <span class="icon">
                <i class="fa fa-user-circle"></i>
              </span>
            </div>
            <div class="navbar-dropdown is-boxed is-right">
              <router-link to="/setting" class="navbar-item">
                {{ $t('settings') }}
              </router-link>
              <router-link to="/history" class="navbar-item">
                {{ $t('my-reservation') }}
              </router-link>
              <hr class="navbar-divider">
              <router-link to="/logout" class="navbar-item">
                {{ $t('sign-out') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Notification from './Notification'

export default {
  components: { Notification },
  data () {
    return {
      mobileMenuVisibility: false,
      categories: {
        [this.$t('group-spaces')]: [
          this.$t('seminar-room'),
          this.$t('multipurpose-room'),
          this.$t('dance-studio'),
          this.$t('group-practice-room')
        ],
        [this.$t('event-spaces')]: [
          this.$t('ullim-hall'),
          this.$t('mirae-hall'),
          this.$t('open-space')
        ],
        [this.$t('bookdabang')]: [],
        [this.$t('workshop')]: []
      }
    }
  },
  methods: {
    toggleMenuVisibility () {
      this.mobileMenuVisibility = !this.mobileMenuVisibility
    }
  }
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
