<template>
  <div class="d-flex pl-2 pr-2">
    <CLinkButton
      v-if="false"
      class="mt-auto mb-auto"
      text="My Tournament"
      :class="{ selected: session === 'mytournament' }"
      @onClick="changeState('mytournament')"
    />
    <div v-if="false" class="divider background-primary ml-2 mr-2"></div>
    <CLinkButton
      v-if="false"
      class="mt-auto mb-auto"
      text="Tournaments"
      :class="{ selected: session === 'tournaments' }"
      @onClick="changeState('tournaments')"
    />
    <CButton
      class="ml-auto"
      :class="{ selected: session === 'create' }"
      text="Create"
      :icon="['fas', 'plus']"
      @onClick="changeState('create')"
    />
    <CButton
      text="Join"
      :class="{ selected: session === 'join' }"
      :icon="['fas', 'users']"
      @onClick="changeState('join')"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CButton from "@/layout/Button/Button";
import CLinkButton from "@/layout/Button/LinkButton";

export default {
  name: "TournamentHeader",
  components: {
    CButton,
    CLinkButton
  },
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
.divider {
  width: 3px;
  height: 2rem;
}
.selected {
  font-weight: bold;
  font-size: 20px;
}
</style>
