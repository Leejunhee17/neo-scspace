<i18n src="./../../../locales/general.yaml"></i18n>

<template>
<div>
  <div class="columns">
    <div class="column is-10 is-offset-1">
      <img src="./../../../assets/images/space/mirae-hall-1.jpg" alt="미래홀의 멋진 풍경" style="width: 100%">
      <div class="columns" style='margin-top: 10px'>
        <h1 class="title column is-one-quarter has-text-primary"> 미래홀<br> 소개</h1>
        <div class="column">
          <p>
            강연, 공연, 상영회 등을 할 수 있는 공간입니다. 공연에 특화되어 있습니다.
          </p>
          <div class="columns has-text-centered is-mobile">
            <div class="column">
              <img src="./../../../assets/info-icons/people.png" alt="사람 수" class="intro-icon">
              <p>
                <small>180명 수용 가능</small>
              </p>
            </div>
            <div class="column">
              <img src="./../../../assets/info-icons/facility.png" alt="장비" class="intro-icon">
              <p>
                <small> 음향과 조명</small><br>
                <small> 무대 </small><br>
                <small> 의자 </small><br>
                <small> 냉난방 시설 </small><br>
              </p>
            </div>
            <div class="column">
              <img src="./../../../assets/info-icons/time.png" alt="시간" class="intro-icon">
              <p>
                <small>24시간 사용 가능</small>
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
            미래홀은 예약이 없을 땐 누구나 사용 가능합니다. 조명장치와 빔 프로젝터는 사용할 수 없습니다. 예약자가 요청하는 경우 장비의 보호를 위해 행사 전날 문을 잠글 수 있습니다.
          </p>
          <h3> 예약 불가 </h3>
          <p>
            학내 구성원 전체에게 열린 행사만 예약이 가능합니다. 행사 대상이 제한된 경우 학생문화공간위원회의 심의를 거쳐 행사를 진행할 수 있습니다. 리허설을 포함하여 <span style="color:#ED4337">일주일<sup>*</sup>에 2번</span>까지 예약할 수 있습니다.
          </p>
          <p>
            전체 학내 구성원을 대상으로 하는 행사의 경우 예약하고자 하는 날로부터 45일 전 00시00분부터 예약이 가능하며 그 이외의 행사의 경우 30일 전 00시00분부터 예약이 가능합니다.</li>
          </p>
          <p>
            전체 학내 구성원을 대상으로 하는 행사의 경우 이를 증빙할 수 있는 자료(홍보 포스터 등)를 행사 3일 전 23시59분까지 제시하여야 하며 제시하지 않은 경우 행사 취소 및 불이익이 가해질 수 있습니다.</li>
          </p>

          <h4> 장비 사용 시 </h4>


          <ul class="list-unstyled">
            <li>사용 45일 전부터 10일 전 23시 59분까지 예약이 가능합니다.</li>
            <li>현재는 <span class="has-text-danger">{{ init }}</span>부터
              <span class="has-text-danger">{{ final }}</span>까지의 예약이 가능합니다.
            </li>
            <li>
              장비 사용 시 <span class="has-text-danger">근로학생</span>이 배정됩니다. 예약 승인 시 근로 장학생의 연락처가 제공되며 리허설과 행사에서 도움을 받을 수 있습니다. 주말의 경우에는 근로 장학생에게 시간당 12,000원의 수당을 지급해야합니다. 단, 공연집중기간에는 수당 지급 없이 근로 장학생의 도움을 받을 수 있습니다.
            </li>
            <li> 시험기간 1주 전부터 시험 종료일까지는 장비를 이용하는 예약이 불가능합니다. </li>
            <li> 예약의 취소는 행사 14일 전 오후 9시까지 학생문화공간위원회에 통보해야 합니다. </li>
          </ul>
          <h4> 장비 미사용 시 </h4>
          <ul class="list-unstyled">
            <li>사용 45일 전부터 2일 전 23시 59분까지 예약이 가능합니다.</li>
            <li>현재는 <span class="has-text-danger"> {{ init2 }}</span>부터
              <span class="has-text-danger">{{ final2 }}</span>까지의 예약이 가능합니다.
            </li>
            <li> 예약의 취소는 행사 2일 전 23시 59분까지 학생문화공간위원회에 통보해야 합니다.</li>
          </ul>
          <small> * 일주일의 시작은 월요일입니다. </small>
          <h3> 공연집중기간 예약 </h3>
          <p>
            공연집중기간 <span class="has-text-danger">3월, 5월, 11월</span>을 의미합니다. 해당 기간 내의 미래홀과 울림홀의 예약은 오프라인 협의로 진행됩니다. 협의 일정은 매 학기 초 학생문화공간위원회 홈페이지, 아라, 페이스북 페이지에 공지됩니다. 협의 이후 남는 시간은 상시 예약이 가능합니다.
          </p>

          <h3> 패널티 </h3>

          <h4> 아래와 같은 경우가 발생했을 시 주의를 부과한다. </h4>
          <ul class="list-unstyled">
              <li> 예약을 하고 사용하지 않는 경우 </li>
              <li> 사전 공지 없이 예약 시간을 지키지 않는 경우 </li>
              <li> 예약 취소를 늦게 공지할 경우 </li>
              <li> 뒷정리가 심각하게 미흡할 경우 </li>
          </ul>

          <h4> 아래와 같은 경우가 발생했을 경고를 부과한다 </h4>
          <ul class="list-unstyled">
              <li> 신청서에 허위 사실을 기재한 경우 </li>
              <li> 음식물 및 주류 반입 </li>
              <li> 미래홀 기기를 무단으로 사용할 경우 </li>
              <li> 미래홀 내부 설비 고의 파손 및 안전상의 문제를 야기할 수 있는 행위 </li>
              <li> 그 외 학생문화공간위원회가 타인에게 피해를 주는 행위 혹은 악의적인 행위라고 판단될 경우 </li>
          </ul>
          <h4> 주의 2회가 누적된 경우, 경고 1회로 대체한다. </h4>
          <h4> 경고 1회가 누적된 경우 경고 부과일 이후의 두 학기(계절학기 포함)에 대하여 예약이 불가능하다. </h4>
          <h4> 경고 및 주의는 매년 봄학기 개강일을 기준으로 초기화된다. </h4>
          </ul>
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
                  <img src="./../../../assets/info-icons/no-drink.png" alt="음료 반입 금지" class="intro-icon" />
                  <p>
                    <small>음료 반입 금지</small>
                  </p>
                </div>
                <div class="column">
                  <img src="./../../../assets/info-icons/no-snack.png" alt="스낵 반입 금지" class="intro-icon" />
                  <p>
                    <small>스낵 반입 금지</small>
                  </p>
                </div>
                <div class="column">
                  <img src="./../../../assets/info-icons/no-food.png" alt="음식 반입 금지" class="intro-icon" />
                  <p>
                    <small>음식 반입 금지</small>
                  </p>
                </div>
                <div class="column">
                  <div class="columns is-mobile">
                    <div class="column">
                      <img src="./../../../assets/info-icons/clean.png" alt="사용 후 정리" class="intro-icon" />
                      <p>
                        <small>사용 후 정리</small>
                      </p>
                    </div>
                  </div>
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
            <ul class="list-unstyled">
              <li>KAIST 학부 총학생회 또는 총학생회 산하 단체가 주최하는 경우</li>
              <li>KAIST 학부 총학생회 회원 전체를 대상으로 열려있는 행사의 경우</li>
              <li>행사의 내용이 KAIST 학생 문화 발전에 기여하는데 도움이 된다고 판단하는 경우</li>
            </ul>
            <h4> 목적의 제한 </h4>
            <p>
              다음의 경우 사용이 불가능합니다. 자세한 사항은 문의해주시기 바랍니다.
            </p>
            <ul class="list-unstyled">
              <li> 정치, 종교적인 행사 및 행위 </li>
              <li> 영리를 목적으로 하는 행사 및 행위 </li>
              <li> 공공질서와 미풍양속을 해칠 우려가 있는 행사 및 행위 </li>
              <li> 시설 또는 설비의 관리에 지장을 줄 수 있는 행사 및 행위 </li>
            </ul>

            <h4> 분실물의 처리 </h4>
            <p>
              사용 후 남겨진 분실물은 학생문화공간위원회에서 1달 간 보관합니다.
            </p>
          </div>
        </div>
      </div>
      <hr>
      <div class="columns">
        <h1 class="title column is-one-quarter has-text-primary"> 장비 목록 </h1>
        <div class="column">
          <div class="columns is-mobile">
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th> 분류 </th>
                  <th> 이름 </th>
                  <th> 용도 </th>
                  <th> 수량 </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="3"> 콘덴서 마이크 </td>
                  <td> AKG C1000S </td>
                  <td> 드럼 오버헤드 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> AKG C480B </td>
                  <td> 드럼 오버헤드, 합창 </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td> - </td>
                  <td> 합창, 뮤지컬 </td>
                  <td> 2 X 2 </td>
                </tr>
                <tr>
                  <td rowspan="6"> 다이나믹 마이크 </td>
                  <td> Shure SM58 </td>
                  <td> 보컬 </td>
                  <td> 4 </td>
                </tr>
                <tr>
                  <td> Shure SM58S </td>
                  <td> 보컬 </td>
                  <td> 5 </td>
                </tr>
                <tr>
                  <td> Shure SM57 </td>
                  <td> 악기, 스피커 </td>
                  <td> 7 </td>
                </tr>
                <tr>
                  <td> SAMSON Q7 </td>
                  <td> 보컬, 악기, 스피커 </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td> Audix D2 </td>
                  <td> 드럼 탐 </td>
                  <td> 4 </td>
                </tr>
                <tr>
                  <td> AKG D112 </td>
                  <td> 드럼 킥 </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td rowspan="2"> DI Box </td>
                  <td> LEEM FDR-80 </td>
                  <td rowspan="2"> 어쿠스틱 기타, 키보드 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> KLARK TEKNIK </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td rowspan="9"> 캐논 라인 </td>
                  <td> 4m </td>
                  <td rowspan="9"> 장비 연결 </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td> 5m </td>
                  <td> 3 </td>
                </tr>
                <tr>
                  <td> 6m </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> 7m </td>
                  <td> 9 </td>
                </tr>
                <tr>
                  <td> 7.5m </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td> 8m </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td> 9m </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> 10m </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td> 11m </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td rowspan="5"> 모니터 라인 </td>
                  <td> 3m </td>
                  <td rowspan="5"> 모니터 스피커 연결 </td>
                  <td> 3 </td>
                </tr>
                <tr>
                  <td> 4m </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td> 5m </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> 6m </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> 7m </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td> 55 라인 </td>
                  <td> - </td>
                  <td> - </td>
                  <td> 6 </td>
                </tr>
                <tr>
                  <td> 55-캐논 라인 </td>
                  <td> - </td>
                  <td> - </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td rowspan="4"> 마이크 홀더 </td>
                  <td> D2 홀더 </td>
                  <td> Audix D2 전용 </td>
                  <td> 4 </td>
                </tr>
                <tr>
                  <td> Shure 홀더 </td>
                  <td> Shure 마이크용 </td>
                  <td> 큰 9 / 작은 7 </td>
                </tr>
                <tr>
                  <td> 무선 홀더 </td>
                  <td> 무선 마이크용 </td>
                  <td> 2 </td>
                </tr>
                <tr>
                  <td> 킥 홀더 </td>
                  <td> AKG D112 전용 </td>
                  <td> 1 </td>
                </tr>
                <tr>
                  <td rowspan="3"> 스탠드 </td>
                  <td> 긴 스탠드 </td>
                  <td rowspan="2"> 일반 </td>
                  <td> 8 </td>
                </tr>
                <tr>
                  <td> 긴 스탠드 (미개봉)</td>
                  <td> 5 </td>
                </tr>
                <tr>
                  <td> 짧은 스탠드 </td>
                  <td> 드럼 하이햇, 스네어 등 </td>
                  <td> 2 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</template>


<script>
import {
  mapState
} from 'vuex'
import {
  DateTime
} from 'luxon'

export default {
  name: 'intro-mirae-room',
  metaInfo () {
    return {
      title: this.$t('mirae-hall', this.language)
    }
  },
  computed: {
    ...mapState(['language']),
    init: function () {
      return DateTime.local().plus({
        days: 14
      }).toFormat("M'월' d'일'")
    },
    final: function () {
      return DateTime.local().plus({
        days: 44
      }).toFormat("M'월' d'일'")
    },
    init2: function () {
      return DateTime.local().plus({
        days: 2
      }).toFormat("M'월 'd'일")
    },
    final2: function () {
      return DateTime.local().plus({
        days: 44
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
