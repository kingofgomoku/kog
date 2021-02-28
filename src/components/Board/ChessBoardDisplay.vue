<template>
  <div id="gomokuBox" class="d-flex ">
    <div class="boardBase d-block m-auto">
      <div class="d-flex" v-for="(row, rowIndex) in board" :key="rowIndex">
        <div
          class="cell"
          v-for="(details, colIndex) in row"
          :class="computedClass(rowIndex, colIndex)"
          :key="colIndex"
        >
          <PiecesDisplay
            :details="details"
            :row="rowIndex"
            :column="colIndex"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PiecesDisplay from "@/components/Board/PiecesDisplay";

export default {
  name: "ChessBoardDisplay",
  components: {
    PiecesDisplay
  },
  props: {
    boardsize: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      board: []
    };
  },
  watch: {
    boardsize(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.initBoard(newValue, Math.floor(newValue / 2));
      }
    }
  },
  mounted() {
    this.initBoard(this.boardsize, Math.floor(this.boardsize / 2));
  },
  methods: {
    initBoard(size, center) {
      this.board = [];
      for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
          if (
            (i === center - 1 || i === center + 1) &&
            (j === center - 1 || j === center || j === center + 1)
          ) {
            row.push({
              action: "click",
              color: "white",
              row: j,
              column: i,
              player: {}
            });
          } else if (
            i === center &&
            (j === center - 1 || j === center || j === center + 1)
          ) {
            row.push({
              action: "click",
              color: "black",
              row: j,
              column: i,
              player: {}
            });
          } else {
            row.push({});
          }
        }
        this.board.push(row);
      }
    },
    computedClass(row, column) {
      let className = "";
      if (row === 0) {
        className += "top ";
      } else if (row === this.boardsize - 1) {
        className += "bottom ";
      }
      if (column === 0) {
        className += "left";
      } else if (column === this.boardsize - 1) {
        className += "right";
      }
      return className;
    }
  }
};
</script>

<style scoped lang="scss"></style>
