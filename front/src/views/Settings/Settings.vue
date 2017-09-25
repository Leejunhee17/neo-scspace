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
                <input v-model="language" value="ko" type="radio" name="member">
                한국어
              </label>
              <label class="radio">
                <input v-model="language" value="en" type="radio" name="member">
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
export default {
  computed: {
    language: {
      get () {
        return this.$store.state.language
      },
      set (value) {
        this.$store.commit('updateLanguage', value)
      }
    }
  }
}
</script>

<style>

</style>
