import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const api = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    language: 'ko', // ko, en 만 가능함
    api
  },
  mutations: {
    initLanguage (state) {
      const cachedLanguage = window.localStorage.getItem('language') // 사용자 설정 언어
      const browserLanguage = window.navigator.language.slice(0, 2) // 브라우저 언어
      const supportedLanguages = ['ko', 'en']

      if (supportedLanguages.includes(cachedLanguage)) {
        // 사용자가 설정한 언어를 지원할 경우 최우선으로 따름
        state.language = cachedLanguage
      } else if (supportedLanguages.includes(browserLanguage)) {
        // 브라우저 언어가 지원되는 언어일 경우 해당 언어로 설정
        state.language = browserLanguage
      } else if (browserLanguage) {
        // 언어가 설정 돼 있는데 한국어, 영어가 아닌 경우 영어 (중국어, ...)
        state.language = 'en'
      } else state.language = 'ko' // 사용자가 이전에 설정한 적도 없고, 브라우저에 설정된 언어도 없다면 한국어로 설정
    },
    toggleLanguage (state) {
      state.language = (state.language === 'ko') ? 'en' : 'ko'
      window.localStorage.setItem('language', state.language)
    },
    updateLanguage (state, newLanguage) {
      state.language = newLanguage
    }
  },
  actions: {
    createEvent (state, event) {
      axios.post(`${api}/events`, event)
    }
  }
})
