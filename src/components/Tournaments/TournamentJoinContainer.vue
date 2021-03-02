<template>
  <b-container v-if="displaySession" class="text-font-light p-1">
    <h4 class="mb-4">
      Enter game code
    </h4>
    <b-form @submit.prevent="onSubmit">
      <b-form-input
        class="inputSize"
        v-model="text"
        placeholder="Enter game code"
      ></b-form-input>
    </b-form>
    <CButtonAlt
      class="text-center mt-4 ml-0 buttonPlacement"
      text="Join Game"
      :icon="['fas', 'users']"
      @onClick="onSubmit"
    />
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import CButtonAlt from "@/layout/Button/ButtonAlt";

export default {
  name: "TournamentJoinContainer",
  data() {
    return {
      text: ""
    };
  },
  components: {
    CButtonAlt
  },
  computed: {
    ...mapGetters({
      session: "tournamentGetState"
    }),
    displaySession() {
      return this.session === "join";
    }
  },
  methods: {
    onSubmit() {
      if (this.text.length !== 0) {
        // find game first
        this.$router.push(`/game/${this.text}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.inputSize {
  width: 300px;
}
</style>
