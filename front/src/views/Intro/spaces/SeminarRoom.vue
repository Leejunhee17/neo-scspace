<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <img src="./../../../assets/images/space/seminar-room-1.jpg" alt="세미나실" style="width: 100%">
        <div class="columns" style='margin-top: 10px'>
          <h1 class="title column is-one-quarter has-text-primary"> 세미나실<br> 소개</h1>
          <div class="column">
            <p>
              자신만의 음악활동을 할 수 있는 공간입니다. 문을 닫으면 당신만의 공간이 만들어집니다.
            </p>
            <div class="columns has-text-centered is-mobile">
              <div class="column">
                <img src="./../../../assets/info-icons/people.png" alt="사람 수" class="intro-icon">
                <p>
                    <small>1실: 20명</small> <br/>
                    <small>2실: 30명</small>
                </p>
              </div>
              <div class="column">
                <img src="./../../../assets/info-icons/facility.png" alt="장비" class="intro-icon">
                <p>
                    <small>빔 프로젝터, 스피커</small> <br/>
                    <small>2실: 화이트보드</small>
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
                    세미나실은 예약이 없을 땐 누구나 사용 가능합니다.
                </p>
                <h3> 상시 예약 </h3>
                <ul>
                  <li>
                      사용 14일 전부터 하루 전 21:00까지 예약이 가능합니다.
                  </li>
                  <li>
                      현재는 <span class="has-text-danger"> {{ init }}</span>부터 <span class="has-text-danger"> {{ final }} </span>까지의 예약만 가능합니다.
                  </li>
                  <li>
                      하루에 최대 <span class="has-text-danger">3시간</span> 예약할 수 있습니다.
                  </li>
                  <li>
                    시험기간 전 주와 시험기간에는 상시 예약이 불가능합니다
                  </li>
                </ul>
                <h3> 정기 예약 </h3>
                <p>
                  정기예약은 회의할 공간이 없는 카이스트 학생 단체를 대상으로 합니다. 오프라인으로 진행되며 학생문화공간위원회 홈페이지, 아라, 페이스북 페이지에 최소 일주일 전에 공지됩니다. 정기예약의 취소는 <span class="has-text-danger"> 사용 3일 전 21시</span>까지 학생문화공간위원회에 알려야합니다.
                </p>
                <p class="content is-small">
                  정기 예약 날짜는 해당 학기의 사정에 따라 조정될 수 있습니다.
                </p>
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
                            <img src="./../../../assets/info-icons/ok-drink.png" alt="음료 반입 가능" class="intro-icon"/>
                            <p>
                                <small>음료 반입 가능</small>
                            </p>
                        </div>
                        <div class="column">
                            <img src="./../../../assets/info-icons/ok-snack.png" alt="스낵 반입 가능" class="intro-icon"/>
                            <p>
                                <small>스낵 반입 가능</small>
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
                  <h4> 예약 사용자 </h4>
                  <p>
                    예약 사용자는 KAIST 학내 구성원으로 제한하나, 다음의 경우에는 학생문화공간위원회와의 협의 하에 사용 가능합니다.
                  </p>
                  <ul>
                    <li> KAIST 학부 총학생회 또는 총학생회 산하 단체가 주최하는 경우 </li>
                    <li> KAIST 학부 총학생회 회원 전체를 대상으로 열려있는 행사의 경우 </li>
                    <li> 행사의 내용이 KAIST 학생 문화 발전에 기여하는데 도움이 된다고 판단하는 경우 </li>
                  </ul>
                  <h4> 목적의 제한 </h4>
                  <p>
                    다음의 경우 사용이 불가능합니다. 자세한 사항은 문의해주시기 바랍니다.
                  </p>
                  <ul>
                    <li> 정치, 종교적인 행사 및 행위 </li>
                    <li> 영리를 목적으로 하는 행사 및 행위 </li>
                    <li> 공공질서와 미풍양속을 해칠 우려가 있는 행사 및 행위 </li>
                    <li> 시설 또는 설비의 관리에 지장을 줄 수 있는 행사 및 행위 </li>
                  </ul>
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
                      사용 후에는 프로젝터와 컴퓨터를 끄고 케이블을 정리해주시기 바랍니다.
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
  name: 'intro-seminar-room',
  metaInfo () {
    return {
      title: this.$t('seminar-room', this.language)
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
