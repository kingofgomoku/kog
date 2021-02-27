<template>
  <div
    class="container fullHeight text-font-light d-flex align-item-stretch flex-column"
  >
    <div class="mt-4 ml-auto mr-auto">
      <p>
        It would seem like you have not join any games
      </p>
      <p>
        Click on the button below join a game
      </p>
    </div>
    <div
      class="tournamentButton background-white mt-4 mb-2 cursor-pointer text-font-dark d-flex"
      @click="changeState('join')"
    >
      <div class="ml-auto mr-auto ">
        Join
        <font-awesome-icon class="ml-1" :icon="['fas', 'users']" fixed-width />
      </div>
    </div>
    <div class="mt-2 ml-auto mr-auto">
      <p>
        Or create your own game and play with friends
      </p>
    </div>
    <div
      class="tournamentButton background-white mt-2 mb-2 cursor-pointer text-font-dark d-flex"
      @click="changeState('create')"
    >
      <div class="ml-auto mr-auto ">
        Create
        <font-awesome-icon class="ml-1" :icon="['fas', 'plus']" fixed-width />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinATournament",
  methods: {
    changeState(string) {
      this.$store.commit("tournamentUpdateSession", string);
    },
    createGame() {
      this.$store.dispatch();
    }
  }
};
</script>

<style lang="scss" scoped>
.fullHeight {
  height: 100%;
}
.tournamentButton {
  padding: 0.5rem 1.5rem;
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
</style>
