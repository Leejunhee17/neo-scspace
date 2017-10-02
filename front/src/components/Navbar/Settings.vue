<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <div class="navbar-link is-hidden-touch">
      <span class="icon">
        <i class="fa fa-user-circle"></i>
      </span>
    </div>
    <div class="navbar-dropdown is-boxed is-right">
      <router-link to="/settings" class="navbar-item">
        {{ $t('settings', language) }}
      </router-link>
      <router-link to="/team" class="navbar-item">
        {{ $t('my-teams', language) }}
      </router-link>
      <hr class="navbar-divider">
      <router-link to="/logout" class="navbar-item">
        {{ $t('sign-out', language) }}
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

<style>

</style>
