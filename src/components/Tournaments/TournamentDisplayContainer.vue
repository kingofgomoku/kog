<template>
  <div v-if="displaySession" class="text-font-light p-1 flex-column ">
    <div v-if="thereAreTournaments"></div>
    <div v-else>
      <JoinATournament />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import JoinATournament from "@/components/Tournaments/Join/JoinATournament";

export default {
  name: "TournamentDisplayContainer",
  components: {
    JoinATournament
  },
  data() {
    return {
      tournaments: [{}]
    };
  },
  computed: {
    ...mapGetters({
      session: "tournamentGetState"
    }),
    displaySession() {
      return this.session === "mytournament";
    },
    thereAreTournaments() {
      return false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
