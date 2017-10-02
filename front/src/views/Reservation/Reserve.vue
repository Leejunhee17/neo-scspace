<template>
  <div class="container">
    <section class="section">
      <full-calendar 
        :events="events"
        :config="{locale: language}"
        @event-created="create" />
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
                    <input class="input is-info" type="text" placeholder="e.g. 인권 영화제">
                  </div>
                  <!-- <p class="help">
                    꼭 입력해야 합니다
                  </p> -->
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
                    <button class="button is-info">
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
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      events: 'http://127.0.0.1:3000/events',
      modalVisibility: false
    }
  },
  computed: {
    ...mapState(['language'])
  },
  methods: {
    create (event) {
      console.log(event.start.toISOString(), event.end.toISOString())
      this.modalVisibility = true
    },
    hideModal () {
      this.modalVisibility = false
    }
  }
}
</script>

<style>

</style>
