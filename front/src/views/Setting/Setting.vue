<template>
  <div class="container">
    <section class="section">
      <h1 class="title"> 설정 </h1>
      <h1 class="subtitle"> Settings </h1>

      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label"> <div class="title is-4">언어</div> <div class="subtitle is-6">Language</div> </label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <label class="radio">
                <input v-model="locale" value="ko" type="radio" name="member">
                한국어
              </label>
              <label class="radio">
                <input v-model="locale" value="en" type="radio" name="member">
                English
              </label>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
// TODO: LocalStorage 에 Setting 상태 저장
export default {
  data () {
    return {
      locale: ''
    }
  },
  mounted () {
    this.locale = this.$i18n.locale
  },
  watch: {
    locale (newLocale) {
      this.$i18n.locale = newLocale
    }
  }
}
</script>

<style>

</style>
