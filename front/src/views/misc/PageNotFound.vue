<template>
  <div class="container">
    <div class="notification">
      <h1 class="title">
        <span class="icon is-medium"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>
        {{ pageNotFoundMessage }}
      </h1>
      <p class="subtitle"> {{ contactMessage }} </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['language']),
    pageNotFoundMessage () {
      return {
        ko: '페이지를 찾을 수 없습니다',
        en: 'Page Not Found'
      }[this.language]
    },
    contactMessage () {
      return {
        ko: '문제가 있다면 scspace.kaist@gmail.com 에 제보해주십시오',
        en: 'If you have any problem, please contact scspace.kaist@gmail.com'
      }[this.language]
    }
  }
}
</script>

<style scoped>
.notification {
  margin: 15em auto;
  max-width: 768px;
}

@media screen and (max-width: 768px) {
  .notification {
    margin: 5em auto;
  }
}

h1.title {
  font-family: 'Kopub Batang';
}

p.subtitle {
  line-height: 1.4;
}
</style>
