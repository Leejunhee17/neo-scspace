<template>
  <div>
    <div class="container">
      <section class="section">
        <component :is="space"/>
        <!-- <full-calendar :events="events" :config="{locale:'ko'}" @event-created="drop" /> -->
      </section>
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

</style>
