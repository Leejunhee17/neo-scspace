<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <img src="./../../../assets/images/space/group-practice-room-1.jpg" alt="창작공방의 멋진 풍경" style="width: 100%">
        <div class="columns" style='margin-top: 10px'>
          <h1 class="title column is-one-quarter has-text-primary"> 합주실<br> 소개</h1>
          <div class="column">
            <p>
              키보드와 드럼, 앰프, 믹서, 마이크 그리고 앰프까지 갖춘 밴드에 최적화된 연습실입니다.
            </p>
            <div class="columns has-text-centered is-mobile">
              <div class="column">
                <img src="./../../../assets/info-icons/people.png" alt="사람 수" class="intro-icon">
                <p>
                    <small>5명</small>
                </p>
                <p>
                    <small>3명 이상*</small>
                </p>
              </div>
              <div class="column">
                <img src="./../../../assets/info-icons/facility.png" alt="장비" class="intro-icon">
                <p>
                    <small> 키보드, 드럼</small>
                    <p>
                    <small> 베이스용, 일렉용 앰프  </small>
                    <p>
                    <small> 마이크, 마이크스탠드   </small>
                    <p>
                    <small> 책상, 의자, 보면대    </small>
                    <p>
                    <small> 캐논잭/55잭 케이블   </small>
                    <p>
                    <small> 파워드 믹서   </small>
                </p>
              </div>
              <div class="column">
                <img src="./../../../assets/info-icons/time.png" alt="시간" class="intro-icon">
                <p>
                    <small>예약자만 사용 가능</small>
                </p>
                <p>
                    <small>24시간 언제나</small>
                </p>
              </div>
            </div>
            <p>
                <small>* 3인 이하의 연습은 개인연습실을 이용해주시기 바랍니다.</small>
            </p>
          </div>
        </div>
        <hr>
        <div class="columns">
            <h1 class="title column is-one-quarter has-text-primary">사용<br> 방법</h1>
            <div class="content column">
                <h3> 상시 예약 </h3>
                <h3> 팀 등록 </h3>
                <p>
                    예약을 위하여 최소 3인의 팀 등록을 필요합니다. 팀 등록은 매 정규학기가 끝날 때 초기화 됩니다.
                </p>
                <h3> 카드키와 보증금 </h3>
                <p>
                    - 카드키는 사용시간 직전의 상근시간에 사무실을 방문하여 대여하여야 하며 사용시간 직후의 상근시간에 사무실을 방문하여 반납하여야 합니다.
                </p>
                <p>
                    - 반납이 하루** 늦어질 때마다 보증금 2천원을 차감하여 최대 2만원을 차감합니다.
                </p>
                <p>
                    - 카드키를 분실할 경우 보증금 2만원을 차감하며 1주일 내에 분실을 신고하지 않았을 경우 해당 학기의 합주실 사용이 금지됩니다.
                </p>
                <small>
                  **주말은 상근이 없으므로 보증금 차감에서 제외됩니다.
                </small>

                <h3> 예약 가능 시간 </h3>
                <p>
                    - 14일 전부터 2일 전 23시 59분까지 예약이 가능합니다.
                <p>
                    - 현재는 <span class="has-text-danger">{{init}}</span>부터 <span class="has-text-danger">{{final}}</span>까지의 예약이 가능합니다.
                <p>
                    - 하루에 최대 <span class="has-text-danger">3시간</span> 예약할 수 있습니다.
                <p>
                    - 시험기간 전 주와 시험기간에는 상시 예약이 불가능합니다.
                </p>
                <h3> 패널티  </h3>
                <h3> 아래와 같은 경우가 발생했을 시 주의를 부과한다  </h3>
                <p>
                    - 물을 제외한 음식물 및 주류를 반입할 경우
                <p>
                    - 예약 이외의 시간에 사용할 경우
                <p>
                    - 뒷정리가 미흡할 경우
                <p>
                <h3> 아래와 같은 경우가 발생했을 경고를 부과한다 </h3>
                <p>
                    - 합주실 내부 설비 고의 파손 및 안전상의 문제를 야기할 수 있는 행위을 할 경우
                </p>
                <p>
                    - 그 외 학생문화공간위원회가 타인에게 피해를 주는 행위 혹은 악의적인 행위라고 판단될 경우
                </p>
                <p>
                    - 카드키 분실을 반납기한으로부터 1주일 이내에 신고를 하지 않은 경우
                </p>
                <h3> 주의 2회가 누적된 경우, 경고 1회로 대체한다. </h3>
                <h3> 경고 1회가 누적된 경우 해당 학기(정규학기 기준)동안 해당 공간의 예약이 불가하다. </h3>
                <h3> 경고 2회가 누적된 경우 해당 학기를 포함한 두 학기(정규학기 기준)동안 동안 해당 공간의 예약이 불가하다. </h3>
                <h3> 경고 및 주의는 매년 가을학기 종강일을 기준으로 초기화된다. </h3>
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
                        <div class="column">
                            <img src="./../../../assets/info-icons/no-food.png" alt="음식 금지" class="intro-icon"/>
                            <p>
                                <small>음식 반입 금지</small>
                            </p>
                        </div>
                        <div class="column">
                            <img src="./../../../assets/info-icons/clean.png" alt="음식 금지" class="intro-icon"/>
                            <p>
                                <small>사용 후 정리</small>
                            </p>
                        </div>
                        <div class="column">
                            <img src="./../../../assets/info-icons/caution-facility.png" alt="음식 금지" class="intro-icon"/>
                            <p>
                                <small>장비 파손 주의</small>
                            </p>
                        </div>
                      </div>
                    </div>
                </div>
                <div class='content'>
                  <h4> 사용자 </h4>
                  <p>
                      KAIST 학내 구성원만 사용할 수 있습니다.
                  </p>

                  <h4> 예약 사용자 </h4>
                  <p>
                      예약 사용자는 KAIST 학내 구성원으로 제한하나, 다음의 경우에는 학생문화공간위원회와의 협의 하에 사용 가능합니다.
                  </p>
                  <p>
                      - KAIST 학부 총학생회 또는 총학생회 산하 단체가 주최하는 경우
                  </p>
                  <p>
                      - KAIST 학부 총학생회 회원 전체를 대상으로 열려있는 행사의 경우
                  </p>
                  <p>
                      - 행사의 내용이 KAIST 학생 문화 발전에 기여하는데 도움이 된다고 판단하는 경우
                  </p>

                  <h4> 목적의 제한 </h4>
                  <p>
                      다음의 경우 사용이 불가능합니다. 자세한 사항은 문의해주시기 바랍니다.
                  </p>
                  <p>
                      - 정치, 종교적인 행사 및 행위
                  </p>
                  <p>
                      - 영리를 목적으로 하는 행사 및 행위
                  </p>
                  <p>
                      - 공공질서와 미풍양속을 해칠 우려가 있는 행사 및 행위
                  </p>
                  <p>
                      - 시설 또는 설비의 관리에 지장을 줄 수 있는 행사 및 행위
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
                      - 사용 후 키보드와 앰프의 전원을 꺼주세요.
                  </p>
                  <p>
                      - 케이블은 앰프 전원을 끈 후 분리해주세요.
                  </p>
                  <p>
                      - 케이블은 잘 정리해주세요.
                  </p>

                </div>
            </div>
        </div>
        <hr>
        <div class="columns">
            <h1 class="title column is-one-quarter has-text-primary"> 장비<br>목록 </h1>
            <div class="column">
              <div class="columns is-mobile">
                <table class="table is-fullwidth">
                  <thead>
                    <tr>
                      <th> 용도 </th>
                      <th> 모델명 </th>
                      <th> 수량 </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td > 베이스 앰프 </td>
                      <td> AMPEG BA-108 </td>
                      <td> 1 </td>
                    </tr>
                    <tr>
                      <td> 일렉 앰프B </td>
                      <td> Fender 212R </td>
                      <td> 1 </td>
                    </tr>
                    <tr>
                      <td> 키보드 </td>
                      <td> KURZWEIL SP4-8 </td>
                      <td> 1 </td>
                    </tr>
                    <tr>
                      <td> 드럼 </td>
                      <td> MAPEX </td>
                      <td> 1 </td>
                    </tr>
                    <tr>
                      <td> 마이크 </td>
                      <td> SHURE SM58SK </td>
                      <td> 2 </td>
                    </tr>
                    <tr>
                      <td> 마이크 스탠드 </td>
                      <td> iMi MTC-503 </td>
                      <td> 1 </td>
                    </tr>
                    <tr>
                      <td> 드럼용 카페트 </td>
                      <td> TAMA </td>
                      <td> 1 </td>
                    </tr>
                    <tr>
                      <td> 파워드 믹서 </td>
                      <td> YAMAHA 400i </td>
                      <td> 1 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import {
  DateTime
} from 'luxon'

export default {
  name: 'intro-workshop',
  metaInfo () {
    return {
      title: this.$t('workshop', this.language)
    }
  },
  computed: {
    ...mapState(['language']),
    init: function () {
      return DateTime.local().plus({
        days: 2
      }).toFormat("M'월' d'일'")
    },
    final: function () {
      return DateTime.local().plus({
        days: 14
      }).toFormat("M'월' d'일'")
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
