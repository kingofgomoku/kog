<template>
  <div v-if="displaySession" class="text-font-light p-1 position-relative">
    <form class="fluid" @submit.prevent="createGame">
      <div class="configuration">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" /><br /><br />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" /><br /><br />
        <input type="submit" value="Submit" />
      </div>
      <div class="gameDisplay"></div>
      <CButtonAlt
        class="buttonPlacement"
        text="Create"
        :icon="['fas', 'plus']"
        @onClick="changeState('create')"
      />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CButtonAlt from "@/layout/Button/ButtonAlt";

export default {
  name: "TournamentCreateContainer",
  components: {
    CButtonAlt
  },
  computed: {
    ...mapGetters({
      session: "tournamentGetState"
    }),
    displaySession() {
      return this.session === "create";
    }
  },
  methods: {
    createGame() {
      // Game has been created
    }
  }
};
</script>

<style lang="scss" scoped>
.fluid {
  width: auto;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1rem 0;
}
.buttonPlacement {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
