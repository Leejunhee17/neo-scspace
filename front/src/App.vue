<i18n src="./locales/general.yaml"></i18n>
<template>
  <div id="app">
    <app-navbar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import appNavbar from './components/Navbar/Navbar'
import appFooter from './components/Footer/Footer'

/* eslint-disable no-unused-vars */
import fontawesome from 'font-awesome/css/font-awesome.css'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app',
  metaInfo () {
    return {
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | ${this.$t('space-committee', this.language)}` : this.$t('space-committee', this.language)
      },
      htmlAttrs: {
        lang: this.language
      }
    }
  },
  mounted () {
    this.initLanguage()
  },
  components: {
    appNavbar, appFooter
  },
  computed: {
    ...mapState(['language'])
  },
  methods: {
    ...mapMutations(['initLanguage'])
  }
}
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/initial-variables";

  $primary: #ffb3b3;
  $link-hover: darken($primary, 14%);

  $navbar-tab-hover-border-bottom-color: $black;
  $navbar-tab-active-color: $black;
  $navbar-tab-active-border-bottom-color: $black;
  $navbar-tab-active-border-bottom-width: 2px;

  @import "~bulma";
  @import "~fullcalendar/dist/fullcalendar.css";
  @import "./assets/fonts/KoPub Batang.css";

  html[lang="ko"] p {
    line-height: 1.7;
    word-break: keep-all;
  }
</style>
