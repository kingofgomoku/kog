<template>
  <div v-if="displaySession" class="text-font-light p-1">
    My Tournament
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TournamentDisplayContainer",
  computed: {
    ...mapGetters({
      session: "tournamentGetState"
    }),
    displaySession() {
      return this.session === "mytournament";
    }
  }
};
</script>

<style lang="scss" scoped></style>
