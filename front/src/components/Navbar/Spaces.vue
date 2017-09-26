<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <div class="navbar-link"> {{ $t('spaces', language) }} </div>
    <div class="navbar-dropdown is-boxed">
      <router-link :to="'/workshop'" class="navbar-item">
        {{ $t('workshop', language) }}
      </router-link>
      <router-link :to="'/bookdabang'" class="navbar-item"> 
        {{ $t('bookdabang', language) }}
      </router-link>
      <div class="navbar-divider is-hidden-touch"></div>
      <div class="dropdown-item is-category is-hidden-touch"><small> {{ $t('individual-spaces', language) }} </small></div>
      <router-link :to="'/piano-room'" class="navbar-item">
        {{ $t('piano-room', language) }}
      </router-link>
      <router-link :to="'/individual-practice-room'" class="navbar-item">
        {{ $t('individual-practice-room', language) }}
      </router-link>
      <div class="navbar-divider is-hidden-touch"></div>
      <div class="dropdown-item is-category is-hidden-touch"><small> {{ $t('group-spaces', language) }} </small></div>
      <router-link :to="'/seminar-room'" class="navbar-item">
        {{ $t('seminar-room', language) }}
      </router-link>
      <router-link :to="'/multipurpose-room'" class="navbar-item">
        {{ $t('multipurpose-room', language) }}
      </router-link>
      <router-link :to="'/dance-studio'" class="navbar-item">
        {{ $t('dance-studio', language) }}
      </router-link>
      <router-link :to="'/group-practice-room'" class="navbar-item">
        {{ $t('group-practice-room', language) }}
      </router-link>
      <div class="navbar-divider is-hidden-touch"></div>
      <div class="dropdown-item is-category is-hidden-touch"><small> {{ $t('event-spaces', language) }} </small></div>
      <router-link :to="'/ullim-hall'" class="navbar-item">
        {{ $t('ullim-hall', language) }}
      </router-link>
      <router-link :to="'/mirae-hall'" class="navbar-item">
        {{ $t('mirae-hall', language) }}
      </router-link>
      <router-link :to="'/open-space'" class="navbar-item">
        {{ $t('open-space', language) }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .is-category {
    padding-top: 0;
    padding-bottom: .125rem;
  }
}
</style>
