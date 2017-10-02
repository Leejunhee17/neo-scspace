import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'ko'
  },
  mutations: {
    initLanguage (state) {
      let language = window.localStorage.getItem('language')
      if (language) state.language = language
    },
    toggleLanguage (state) {
      state.language = (state.language === 'ko') ? 'en' : 'ko'
      window.localStorage.setItem('language', state.language)
    },
    updateLanguage (state, newLanguage) {
      state.language = newLanguage
    }
  }
})
