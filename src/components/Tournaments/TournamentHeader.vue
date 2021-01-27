<template>
  <div class="d-flex pl-2 pr-2">
    <div
      :class="{ selected: session === 'mytournament' }"
      class="mt-auto mb-auto cursor-pointer"
      @click="changeState('mytournament')"
    >
      My Tournament
    </div>
    <div class="divider background-primary ml-2 mr-2"></div>
    <div
      :class="{ selected: session === 'tournaments' }"
      class="mt-auto mb-auto cursor-pointer"
      @click="changeState('tournaments')"
    >
      Tournaments
    </div>
    <div
      class="tournamentButton background-primary ml-auto cursor-pointer"
      @click="changeState('create')"
    >
      Create
      <font-awesome-icon class="ml-1" :icon="['fas', 'plus']" fixed-width />
    </div>
    <div
      class="tournamentButton background-primary ml-2 cursor-pointer"
      @click="changeState('join')"
    >
      Join
      <font-awesome-icon class="ml-1" :icon="['fas', 'users']" fixed-width />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TournamentHeader",
  computed: {
    ...mapGetters({
      session: "tournamentGetState"
    })
  },
  methods: {
    changeState(string) {
      this.$store.commit("tournamentUpdateSession", string);
    }
  }
};
</script>

<style lang="scss" scoped>
.tournamentButton {
  padding: 0.5rem 1.5rem;
  color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  transition: all 0.15s ease-in-out;
}
.tournamentButton:hover {
  -webkit-box-shadow: 0rem 0rem 0.5rem 0rem rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0rem 0rem 0.5rem 0rem rgba(0, 0, 0, 0.4);
  box-shadow: 0rem 0rem 0.5rem 0rem rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
}

.divider {
  width: 3px;
  height: 2rem;
}
.selected {
  font-weight: bold;
  font-size: 20px;
}
</style>
