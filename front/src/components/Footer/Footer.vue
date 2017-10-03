<i18n src="./../../locales/general.yaml"></i18n>
<i18n>
ko:
  source-license: "<a href=\"https://opensource.org/licenses/mit-license.php\">MIT</a> 라이선스로 소스코드 배포."
  content-license: "<a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/\">CC BY-NC-SA 4.0</a> 라이선스로 컨텐츠 배포."

en:
  source-license: "Source code licensed <a href=\"https://opensource.org/licenses/mit-license.php\">MIT</a>."
  content-license: "Content licensed <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/\">CC BY-NC-SA 4.0</a>."
</i18n>
<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-2-desktop is-12-mobile">
            <h2><strong>{{ $t('space-committee', language) }}</strong></h2>
            <ul>
              <li><router-link to="/intro/committee">{{ $t('intro', language) }}</router-link></li>
              <li><router-link to="/intro/business">{{ $t('business', language) }}</router-link></li>
            </ul>
          </div>
          <div class="column is-2-desktop is-12-mobile">
            <h2><strong>{{ $t('student-center', language) }}</strong></h2>
            <ul>
              <li><router-link to="/intro/center">{{ $t('intro', language) }}</router-link></li>
              <li><router-link to="/intro/history">{{ $t('history', language) }}</router-link></li>
              <li><router-link to="/intro/statistics">{{ $t('statistics', language) }}</router-link></li>
            </ul>
          </div>
          <div class="column is-6">
            <h2 id="contact"><strong>{{ $t('contact', language) }}</strong></h2>
            <p><a href="https://www.google.com/maps/place/장영신+학생회관/@36.372944,127.3606679,19.58z/data=!4m5!3m4!1s0x0:0x8e3b5c9219107f6d!8m2!3d36.373244!4d127.360578" target="_blank"> {{ $t('address', language) }} </a></p>
            <p>{{ $t('working-hour', language) }}</p>
            <p><a href="tel:+82-42-350-0386"> 042-350-0386 </a></p>
            <p><a href="mailto:scspace.kaist@gmail.com"> scspace.kaist@gmail.com </a></p><br />
          </div>
        </div>

        <p>
          <a href="https://facebook.com/scspace.kaist" target="_blank"><span class="icon"><i class="fa fa-lg fa-facebook-official"></i></span></a>
          <a href="https://github.com/scspace/scspace" target="_blank"><span class="icon"><i class="fa fa-lg fa-github"></i></span></a>
          <!-- <a href="https://kaist.ac.kr" target="_blank"> KAIST </a> -->
        </p>
        <p v-html="$t('source-license', language)"></p>
        <p v-html="$t('content-license', language)"></p>
      </div>
    </footer>
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
footer.footer {
  margin-top: 4rem;
  padding: 1.5rem;
  padding-bottom: 2rem;
}

footer.footer h2 {
  margin-bottom: 0.7em;
}

footer.footer a {
  color: #333;
}

footer.footer a:hover {
  color: black;
  text-decoration: underline;
}

footer.footer a.is-active {
  color: black;
  text-decoration: underline;
}
</style>
