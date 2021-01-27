<template>
  <div v-if="displaySession" class="text-font-light p-1">
    Join
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TournamentJoinContainer",
  computed: {
    ...mapGetters({
      session: "tournamentGetState"
    }),
    displaySession() {
      return this.session === "join";
    }
  }
};
</script>

<style lang="scss" scoped></style>
