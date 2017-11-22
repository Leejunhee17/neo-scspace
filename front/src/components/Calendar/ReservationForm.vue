<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('hide-form')"></div>
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
                <button @click="submitForm()" class="button is-info">
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
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['initialStart', 'initialEnd', 'space'],
  data: function () {
    return {
      start: '',
      end: '',
      title: ''
    }
  },
  mounted: function () {
    this.start = this.initialStart
    this.end = this.initialEnd
  },
  methods: {
    ...mapActions(['createEvent']),
    submitForm () {
      this.createEvent({
        space: this.space,
        start: this.end,
        end: this.end,
        title: this.title
      })
      this.$emit('hide-form')
    }
  }
}
</script>

<style>

</style>
