<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <router-link to="/reserve" class="button is-primary">예약하기</router-link>
    <p>{{ $t('piano-room', language) }}</p>
  </div>
</template>

<template>
  <div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <img src="./../../../assets/images/space/piano-room-1.jpg" alt="피아노실" style="width: 100%">
        <div class="columns" style='margin-top: 10px'>
          <h1 class="title column is-one-quarter has-text-primary"> 피아노실<br> 소개</h1>
          <div class="column">
            <p>
              마음껏 피아노를 연습할 수 있는 공간입니다.
            </p>
            <div class="columns has-text-centered is-mobile">
              <div class="column">
                <img src="./../../../assets/info-icons/people.png" alt="사람 수" class="intro-icon">
                <p>
                    <small>최대 2명</small>
                </p>
              </div>
              <div class="column">
                <img src="./../../../assets/info-icons/facility.png" alt="장비" class="intro-icon">
                <p>
                    <small>피아노와 보면대</small><br>
                    <small>공기청정기</small><br>
                    <small>냉난방 시설</small>
                </p>
              </div>
              <div class="column">
                <img src="./../../../assets/info-icons/time.png" alt="시간" class="intro-icon">
                <p>
                    <small>24시간 언제나</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="columns">
            <h1 class="title column is-one-quarter has-text-primary">사용<br> 방법</h1>
            <div class="content column">
                <h3> 상시 개방 </h3>
                <p>
                    피아노실은 예약이 없을 땐 누구나 사용 가능합니다.
                </p>
                <h3> 상시 예약 </h3>
                <ul>
                  <li>
                      사용 14일 전부터 1일 전 23시 59분까지 예약이 가능합니다.
                  </li>
                  <li>
                      현재는 <span class="has-text-danger"> {{ init }} </span>부터 <span class="has-text-danger"> {{ final }}</span>까지의 예약만 가능합니다.
                  </li>
                  <li>
                      하루에 최대 <span class="has-text-danger">2시간</span> 예약할 수 있습니다.
                  </li>
                </ul>
                <h3> 패널티 </h3>

<h4> 아래와 같은 경우가 발생했을 시 주의를 부과한다 </h4>
<ul class="list-unstyled">
    <li> 물을 제외한 음식물을 반입할 경우 </li>
    <li> 예약을 취소하지 않고 공간을 사용하지 않을 경우 </li>
    <li> 뒷정리가 미흡할 경우 </li>
</ul>

<h4> 아래와 같은 경우가 발생했을 경고를 부과한다 </h4>
<ul class="list-unstyled">
    <li> 피아노실 내부 설비 고의 파손 및 안전상의 문제를 야기할 수 있는 행위을 할 경우 </li>
    <li> 그 외 학생문화공간위원회가 타인에게 피해를 주는 행위 혹은 악의적인 행위라고 판단될 경우 </li>
</ul>
<h4> 주의 2회가 누적된 경우, 경고 1회로 대체한다. </h4>
<h4> 경고 1회가 누적된 경우 경고 부과일로부터 30일 동안 해당 공간의 예약이 불가하다. </h4>
<h4> 경고 2회 이상 누적된 경우 경고 부과일로부터 90일 동안 해당 공간의 예약이 불가하다. </h4>
<h4> 경고 및 주의는 매년 봄학기 개강일을 기준으로 초기화된다. </h4>
            </div>
        </div>
        <hr>
        <div class="columns">
            <h1 class="title column is-one-quarter has-text-primary"> 주의<br>사항 </h1>
            <div class="column">
                <div class="columns has-text-centered">
                    <div class="column">
                      <div class="columns is-mobile">
                        <div class="column">
                            <img src="./../../../assets/info-icons/no-drink.png" alt="음료 반입 가능" class="intro-icon"/>
                            <p>
                                <small>음료 반입 금지</small>
                            </p>
                        </div>
                        <div class="column">
                            <img src="./../../../assets/info-icons/no-snack.png" alt="스낵 반입 가능" class="intro-icon"/>
                            <p>
                                <small>스낵 반입 금지</small>
                            </p>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div class="columns is-mobile">
                        <div class="column">
                            <img src="./../../../assets/info-icons/no-food.png" alt="음식 금지" class="intro-icon"/>
                            <p>
                                <small>음식 반입 금지</small>
                            </p>
                        </div>
                        <div class="column">
                            <img src="./../../../assets/info-icons/clean.png" alt="사용 후 정리" class="intro-icon"/>
                            <p>
                                <small>사용 후 정리</small>
                            </p>
                        </div>
                      </div>
                    </div>
                </div>
                <div class='content'>
                  <h4> 사용자 </h4>
                  <p>
                      KAIST 학내 구성원만 사용 및 예약 사용할 수 있습니다.
                  </p>

                  <h4> 예약과 불일치 </h4>
                  <p>
                      예약과 실제 사용이 다를 경우 예약 제한 등의 패널티가 부과됩니다.
                  </p>

                  <h4> 분실물의 처리 </h4>
                  <p>
                      사용 후 남겨진 분실물은 학생문화공간위원회에서 1달 간 보관합니다.
                  </p>

                  <h4> 정리정돈 </h4>
                  <p>
                      KAIST 학생 모두가 사용하는 공간입니다. 사용 후에는 주변을 정리정돈해 주시기 바랍니다.
                  </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { mapState } from 'vuex'
import { DateTime } from 'luxon'

export default {
  name: 'intro-piano-room',
  metaInfo () {
    return {
      title: this.$t('piano-room', this.language)
    }
  },
  computed: {
    ...mapState(['language']),
    init: function () {
      return DateTime.local().plus({days: 1}).toFormat("M'월' d'일'")
    },
    final: function () {
      return DateTime.local().plus({days: 13}).toFormat("M'월' d'일'")
    }
  }
}
</script>

<style>
  .intro-icon {
    height: 64px;
    margin: 20px 0px;
  }

</style>
