<template>
  <div class="intro-container">
    <div class="container">
      <component :is="space"/>
      <!-- <full-calendar :events="events" :config="{locale:'ko'}" @event-created="drop" /> -->
    </div>
  </div>
</template>

<script>
import Workshop from './spaces/Workshop'
import Bookdabang from './spaces/Bookdabang'
import PianoRoom from './spaces/PianoRoom'
import IndividualPracticeRoom from './spaces/IndividualPracticeRoom'
import SeminarRoom from './spaces/SeminarRoom'
import MultipurposeRoom from './spaces/MultipurposeRoom'
import DanceStudio from './spaces/DanceStudio'
import GroupPracticeRoom from './spaces/GroupPracticeRoom'
import UllimHall from './spaces/UllimHall'
import MiraeHall from './spaces/MiraeHall'
import OpenSpace from './spaces/OpenSpace'

export default {
  props: ['space'],
  components: {
    Workshop,
    Bookdabang,
    PianoRoom,
    IndividualPracticeRoom,
    SeminarRoom,
    MultipurposeRoom,
    DanceStudio,
    GroupPracticeRoom,
    UllimHall,
    MiraeHall,
    OpenSpace
  }
}
</script>

<style>
.intro-container {
  padding: 1.5rem;
}
</style>
