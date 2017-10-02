<i18n src="./../../locales/general.yaml"></i18n>
<template>
  <div class="container">
    <section class="section">
      <div class="columns">
        <div class="column">
          <h1 class="title"> {{ $t('poster', language) }} </h1>
          <p>
            장영신학생회관 안팎의 게시물은 아래의 규정에 따라 신고 후 부착해야 합니다. 내부 게시물은 신학관 내부에 부착된 게시물을 의미합니다. 대부분의 포스터나 자보가 여기에 포함됩니다. 게시물을 다른 곳에 부착하고 싶거나, 크기 제한을 넘는 게시물을 붙이고자 하는 경우에는 게시물 부착 신고 페이지에서 규격 외 게시물 승인을 요청해주시기 바랍니다. 31일이 넘는 게시가 필요하다면, 단순히 재신고하시면 됩니다.
          </p>
        </div>
        <div class="column"></div>
      </div>
    </section>
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
h1.title {
  font-family: 'Kopub Batang'
}
</style>
