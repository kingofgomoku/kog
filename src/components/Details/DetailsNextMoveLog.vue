<template>
  <div v-if="latestMove" class="detailsUserContainer">
    {{ latestMove.action }} - {{ latestMove.color }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailsNextMoveLog",
  computed: {
    ...mapGetters({
      latestMove: "gameReturnLatestMove"
    })
  }
};
</script>

<style lang="scss" scoped>
.detailsUserContainer {
  padding: 5px;
  border: 1px solid #0776a6;
  border-radius: 5px;
  margin-top: 0.5rem;
}
</style>
