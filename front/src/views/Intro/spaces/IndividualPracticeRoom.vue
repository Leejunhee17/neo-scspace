<i18n src="./../../../locales/general.yaml"></i18n>

<template>
  <div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <img src="./../../../assets/images/space/individual-practice-room-1.jpg" alt="개인연습실" style="width: 100%">
        <div class="columns" style='margin-top: 10px'>
          <h1 class="title column is-one-quarter has-text-primary"> 개인연습실<br> 소개</h1>
          <div class="column">
            <p>
              자신만의 음악활동을 할 수 있는 공간입니다. 문을 닫으면 당신만의 공간이 만들어집니다.
            </p>
            <div class="columns has-text-centered is-mobile">
              <div class="column">
                <img src="./../../../assets/info-icons/people.png" alt="사람 수" class="intro-icon">
                <p>
                    <small>3명 수용 가능</small>
                </p>
              </div>
              <div class="column">
                <img src="./../../../assets/info-icons/facility.png" alt="장비" class="intro-icon">
                <p>
                    <small>보면대 및 의자</small>
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
                    개인연습실은 예약이 없을 땐 누구나 사용 가능합니다.
                </p>
                <h3> 상시 예약 </h3>
                <ul>
                  <li>
                      사용 14일 전부터 하루 전 21:00까지 예약이 가능합니다.
                  </li>
                  <li>
                      현재는 <span class="has-text-danger">11월 9일</span>부터 <span class="has-text-danger">11월 21일</span>까지의 예약만 가능합니다.
                  </li>
                  <li>
                      하루에 최대 <span class="has-text-danger">2시간</span> 예약할 수 있습니다.
                  </li>
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

export default {
  name: 'intro-individual-practice-room',
  metaInfo () {
    return {
      title: this.$t('individual-practice-room', this.language)
    }
  },
  computed: {
    ...mapState(['language'])
  }
}
</script>

<style>
  .intro-icon {
    height: 64px;
    margin: 20px 0px;
  }
</style>
