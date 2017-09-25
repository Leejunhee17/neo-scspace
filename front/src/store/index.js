import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'ko'
  },
  mutations: {
    toggleLanguage (state) {
      state.language = (state.language === 'ko') ? 'en' : 'ko'
    },
    updateLanguage (state, newLanguage) {
      state.language = newLanguage
    }
  }
})
