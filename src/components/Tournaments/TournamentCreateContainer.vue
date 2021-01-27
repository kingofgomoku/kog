<template>
  <div v-if="displaySession" class="text-font-light p-1">
    Create Tournaments
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TournamentCreateContainer",
  computed: {
    ...mapGetters({
      session: "tournamentGetState"
    }),
    displaySession() {
      return this.session === "create";
    }
  }
};
</script>

<style lang="scss" scoped></style>
