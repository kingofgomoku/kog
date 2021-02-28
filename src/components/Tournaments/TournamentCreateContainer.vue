<template>
  <b-container
    v-if="displaySession"
    class="text-font-light p-1 position-relative"
  >
    <b-row>
      <b-col cols class="d-flex flex-column align-items-stretch">
        <b-container class="mt-4">
          <b-form @submit.prevent="createGame">
            <b-form-group label="Board Size" v-slot="{ ariaDescribedby }">
              <b-form-radio
                v-model="boardSizeSelected"
                :aria-describedby="ariaDescribedby"
                name="15"
                :value="15"
                >15 x 15</b-form-radio
              >
              <b-form-radio
                v-model="boardSizeSelected"
                :aria-describedby="ariaDescribedby"
                name="19"
                :value="19"
                >19 x 19</b-form-radio
              >
            </b-form-group>
          </b-form>
        </b-container>
        <CButtonAlt
          class="text-center mt-auto buttonPlacement"
          text="Create"
          :icon="['fas', 'plus']"
          @onClick="changeState('create')"
        />
      </b-col>
      <b-col cols>
        <ChessBoardDisplay :boardsize="boardSizeSelected - 1" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import CButtonAlt from "@/layout/Button/ButtonAlt";
import ChessBoardDisplay from "@/components/Board/ChessBoardDisplay";

export default {
  name: "TournamentCreateContainer",
  components: {
    CButtonAlt,
    ChessBoardDisplay
  },
  data() {
    return {
      boardSizeSelected: 15
    };
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
