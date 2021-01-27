<template>
  <div v-if="displaySession" class="text-font-light p-1">
    Tournaments
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TournamentListContainer",
  computed: {
    ...mapGetters({
      session: "tournamentGetState"
    }),
    displaySession() {
      return this.session === "tournaments";
    }
  }
};
</script>

<style lang="scss" scoped></style>
