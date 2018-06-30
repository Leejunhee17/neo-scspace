<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <img src="./../../../assets/images/space/ullim-hall-1.jpg" alt="창작공방의 멋진 풍경" style="width: 100%">
        <div class="columns" style='margin-top: 10px'>
          <h1 class="title column is-one-quarter has-text-primary"> 울림홀<br> 소개</h1>
          <div class="column">
            <p>
              강연, 공연, 상영회 등을 할 수 있는 공간입니다. 강연과 상영회에 특화되어 있습니다.
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
                    <small> 음향과 조명</small>
                    <p>
                    <small> 프로젝터와 스크린 </small>
                    <p>
                    <small> 무대  </small>
                    <p>
                    <small> 의자 120개   </small>
                    <p>
                    <small> 냉난방 시설  </small>
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
                    울림홀은 예약이 없을 땐 누구나 사용 가능합니다. 조명장치와 빔 프로젝터는 사용할 수 없습니다.
                </p>
                <h3> 상시 예약 </h3>
                <p>
                    학내 구성원 전체에게 열린 행사만 예약이 가능합니다. 행사 대상이 제한된 경우 학생문화공간위원회의 심의를 거쳐 행사를 진행할 수 있습니다. 리허설을 포함하여 <span class="has-text-danger">일주일*에 2번</span>까지 예약할 수 있습니다.
                </p>
                <p>
                    전체 학내 구성원을 대상으로 하는 행사의 경우 예약하고자 하는 날로부터 45일 전 00시00분부터 예약이 가능하며 그 이외의 행사의 경우 30일 전 00시00분부터 예약이 가능합니다.
                </p>
                <p>
                    전체 학내 구성원을 대상으로 하는 행사의 경우 이를 증빙할 수 있는 자료(홍보 포스터 등)를 행사 3일 전 23시59분까지 제시하여야 하며 제시하지 않은 경우 행사 취소 및 불이익이 가해질 수 있습니다.
                </p>
                <h3> 장비 사용 시 </h3>
                <p>
                    - 사용 45일 전부터 10일 전 23시 59분까지 예약이 가능합니다.
                <p>
                    - 현재는 <span class="has-text-danger">{{ init }}</span>부터 <span class="has-text-danger">{{ final }}</span>까지의 예약이 가능합니다.
                <p>
                    - 장비 사용 시 <span class="has-text-danger">근로학생</span>이 배정됩니다. 예약 승인 시 근로 장학생의 연락처가 제공되며 리허설과 행사에서 도움을 받을 수 있습니다. 주말의 경우에는 근로 장학생에게 시간당 12,000원의 수당을 지급해야합니다.
                <p>
                    - 취소는 행사 10일 전 23시 59분까지 학생문화공간위원회에 통보해야 합니다.
                </p>
                <h3> 장비 미 사용 시  </h3>
                <p>
                    - 사용 45일 전부터 2일 전 23시 59분까지 예약이 가능합니다.
                <p>
                    - 현재는 <span class="has-text-danger">{{ init2 }}</span>부터 <span class="has-text-danger">{{ final2 }}</span>까지의 예약이 가능합니다.
                <p>
                    - 예약의 취소는 행사 2일 전 23시 59분까지 학생문화공간위원회에 통보해야 합니다.
                <p>
                <small>
                    * 일주일의 시작은 월요일입니다.
                </small>
                <h3> 공연집중기간 예약 </h3>
                <p>
                    공연집중기간 <span class="has-text-danger">3월, 5월, 11월</span>을 의미합니다. 해당 기간 내의 울림홀과 미래홀의 예약은 오프라인 협의로 진행됩니다. 협의 일정은 매 학기 초 학생문화공간위원회 홈페이지, 아라, 페이스북 페이지에 공지됩니다. 협의 이후 남는 시간은 상시 예약이 가능합니다.
                </p>

                <h3> 보증금 </h3>
                <p>
                    예약이 승인되면 행사 <span class="has-text-danger">하루 전 21시</span>까지 보증금을 입금해야합니다. 사용 이후 뒷정리와 기물 파손 여부에 따라 보증금 환급 여부가 결정됩니다.
                </p>

                <small>
                    감사위에 제출할 <span class="has-text-danger">보증금 입금 증빙 서류</span>가 필요할 경우 scspace.kaist@gmail.com 로 문의 해 주시기 바랍니다

                </small>

                <h3> 패널티 </h3>
                <p> 한 학기 사용 금지 </p>
                <small> - 신청서를 허위로 기재할 경우 </small>
                <p> </p>
                <small>
                    - 금지사항을 어길 경우
                </small>
                <p> </p>
                <small>
                    - 울림홀 기기를 무단으로 사용할 경우
                </small>
                <p> </p>

                <p> 공연집중기간 후순위 배정 </p>
                <small>
                    - 예약을 하고 사용하지 않을 경우
                </small>
                <p> </p>
                <small>
                    - 사전 공지없이 예약 시간을 지키지 않을 경우
                </small>
                <p> </p>
                <small>
                    - 예약 취소를 늦게 공지할 경우
                </small>
                <p> </p>
                <small>
                    - 뒷정리가 심각하게 미흡할 경우
                </small>
                <p> </p>
                <small>
                    - 그 외 타인에게 피해를 주는 악의적인 행위
                </small>
                <p> </p>
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
                            <img src="./../../../assets/info-icons/not-decided-drink.png" alt="음료 반입 가능" class="intro-icon"/>
                            <p>
                                <small>음료 협의</small>
                            </p>
                        </div>
                        <div class="column">
                            <img src="./../../../assets/info-icons/not-decided-snack.png" alt="스낵 반입 가능" class="intro-icon"/>
                            <p>
                                <small>스낵 협의</small>
                            </p>
                        </div>
                        <div class="column">
                            <img src="./../../../assets/info-icons/not-decided-food.png" alt="음식 금지" class="intro-icon"/>
                            <p>
                                <small>음식 협의</small>
                            </p>
                        </div>
                        <div class="column">
                            <img src="./../../../assets/info-icons/clean.png" alt="음식 금지" class="intro-icon"/>
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

                  <h4> 분실물의 처리 </h4>
                  <p>
                      사용 후 남겨진 분실물은 학생문화공간위원회에서 1달 간 보관합니다.
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
        days: 10
      }).toFormat("M'월' d'일'")
    },
    final: function () {
      return DateTime.local().plus({
        days: 45
      }).toFormat("M'월' d'일'")
    },
    init2: function () {
      return DateTime.local().plus({
        days: 2
      }).toFormat("M'월 'd'일")
    },
    final2: function () {
      return DateTime.local().plus({
        days: 45
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
