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
    @event-created="showForm" 
    @event-selected="showDetail"/>
  <reservation-form
    v-if="formVisibility"
    :initial-start="formData.initialStart"
    :initial-end="formData.initialEnd"
    :space="space"
    @hide-form="hideForm"/>
</div>
</template>

<script>
import { mapState } from 'vuex'
import ReservationForm from './ReservationForm'

export default {
  props: {'space': String},
  components: { ReservationForm },
  data () {
    return {
      formVisibility: false,
      formData: {
        initialStart: '',
        initialEnd: ''
      }
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
    showForm (event) {
      this.formData.initialStart = event.start.toISOString()
      this.formData.initialEnd = event.end.toISOString()
      this.formVisibility = true
    },
    hideForm () {
      this.formVisibility = false
    },
    showDetail (event) {
      console.log(event)
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
