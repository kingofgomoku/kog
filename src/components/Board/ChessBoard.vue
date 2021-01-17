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

<style scoped lang="scss">
#gomokuBox {
  padding: 5px;
  border: 1px solid #0776a6;
  background: #194d6d;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  border-radius: 6px;
}

.boardBase {
  background: url("../../assets/board/bg-chessboard.jpg") center center
    no-repeat;
}

.cell {
  background: url("../../assets/board/bg-square.png") center center no-repeat;

  &.left {
    background-image: url("../../assets/board/bg-square-l.png");
  }

  &.right {
    background-image: url("../../assets/board/bg-square-r.png");
  }

  &.top {
    background-image: url("../../assets/board/bg-square-t.png");

    &.left {
      background-image: url("../../assets/board/bg-square-tl.png");
    }

    &.right {
      background-image: url("../../assets/board/bg-square-tr.png");
    }
  }
  &.bottom {
    background-image: url("../../assets/board/bg-square-b.png");

    &.left {
      background-image: url("../../assets/board/bg-square-bl.png");
    }

    &.right {
      background-image: url("../../assets/board/bg-square-br.png");
    }
  }
}
</style>
