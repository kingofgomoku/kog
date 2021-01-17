<template>
  <div id="gomokuBox" class="d-flex ">
    <div v-if="returnChessBoard" class="boardBase d-block m-auto">
      <div
        class="d-flex"
        v-for="(row, rowIndex) in gomokuBoard"
        :key="rowIndex"
      >
        <div
          class="cell"
          v-for="(details, colIndex) in row"
          :class="computedClass(rowIndex, colIndex)"
          :key="colIndex"
        >
          <Pieces
            :details="details"
            :playerturn="playerTurn"
            :row="rowIndex"
            :column="colIndex"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pieces from "@/components/Board/Pieces";

export default {
  name: "chessBox",
  components: {
    Pieces
  },
  computed: {
    ...mapGetters({
      playerTurn: "gameReturnPlayerTurn",
      gomokuBoard: "gameReturnGameBoard",
      boardSize: "gameReturnBoardSize"
    }),
    returnChessBoard() {
      return !!this.gomokuBoard;
    }
  },
  mounted() {
    this.$store.dispatch("gameInitializeGameBoard", this.boardSize.size);
  },
  methods: {
    computedClass(row, column) {
      let className = "";
      if (row === 0) {
        className += "top ";
      } else if (row === this.boardSize.rows - 1) {
        className += "bottom ";
      }
      if (column === 0) {
        className += "left";
      } else if (column === this.boardSize.columns - 1) {
        className += "right";
      }
      return className;
    },
    computePlayedState(row, column) {
      return {
        row,
        column
      };
    }
  }
};
</script>

<style scoped lang="scss"></style>
