<i18n>
ko:
  today: "오늘"
  month: "월"
  week: "주"
  day: "일"
  list: "일정 목록"
  all-day-text: "종일"
  no-events-message: '일정이 없습니다'

en:
  today: "Today"
  month: "Month"
  week: "Week"
  day: "Day"
  list: "List"
  all-day-text: "All-day"
  no-events-message: 'No events to display'
</i18n>
<template>
<div>
  <full-calendar 
    :events="events"
    :config="{
      locale: language,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,list'
      },
      buttonText: {
        today: $t('today', language),
        month: $t('month', language),
        week: $t('week', language),
        day: $t('day', language),
        list: $t('list', language)
      },
      noEventsMessage: $t('no-events-message', language),
      allDayText: $t('all-day-text', language),
      height: 'auto',
      aspectRatio: 1,
      eventColor: '#ff3860'
    }"
    @event-created="showModal" />
  <div class="modal" :class="{'is-active' : modalVisibility}">
    <div class="modal-background" @click="hideModal"></div>
    <div class="modal-card">
      <div class="box">
        <h1 class="title"> 새 이벤트 </h1>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label"> 행사 이름 </label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model="title" class="input is-info" type="text">
              </div>
              <!-- <p class="help">
                꼭 입력해야 합니다
              </p> -->
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label"> 시작 시간 </label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model="start" class="input is-info" type="datetime-local">
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label"> 끝 시간 </label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model="end" class="input is-info" type="datetime-local">
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button @click="createEvent({space, start, end, title})" class="button is-info">
                  예약하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <header class="modal-card-head">
        <p class="modal-card-title">새 이벤트</p>
        <button @click="hideModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <label for="title" class="column is-2"> 제목 </label>
          <div class="column is-10">
            <input id="title" type="text" class="input">
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button @click="hideModal" class="button">Cancel</button>
      </footer> -->
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {'space': String},
  data () {
    return {
      modalVisibility: false,
      title: '',
      start: '',
      end: ''
    }
  },
  computed: {
    ...mapState(['language', 'api']),
    events: function () {
      return {
        url: `${this.api}/events`,
        data: {
          space: this.space
        }
      }
    }
  },
  methods: {
    ...mapActions(['createEvent']),
    showModal (event) {
      this.start = event.start.toISOString()
      this.end = event.end.toISOString()
      this.modalVisibility = true
    },
    hideModal () {
      this.modalVisibility = false
    }
  }
}
</script>

<style>
.fc button.fc-button {
  text-shadow: none;
  background: whitesmoke;
  border: 1px solid #dbdbdb
}

.fc button.fc-button:hover, .fc button.fc-button:focus {
  box-shadow: none;
  background-color: #dadada;
}

.fc button.fc-button:disabled:hover {
  background-color: whitesmoke;
  cursor: default;
}

.fc button.fc-button.fc-state-active {
  /* border-color: black; */
  background-color: #d9d9d9;
  box-shadow: none;
}

/* @media screen and (min-width: 768px) {
  html[lang="ko"] .fc .fc-right button.fc-button {
    padding: 0 1.5rem;
  }
} */

</style>
