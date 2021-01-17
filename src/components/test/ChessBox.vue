<template>
  <div id="chessBox" class="d-flex ">
    <div class="d-block m-auto">
      <div class="d-flex" v-for="row in rows" :key="row">
        <div
          class="cell"
          v-for="column in columns"
          :class="computedClass(row, column)"
          :key="column"
        >
          <div class="chess" @click="setChess(row, column, 'black')"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chessBox",
  data() {
    return {
      rows: 15,
      columns: 15
    };
  },
  methods: {
    computedClass(row, column) {
      let className = "";
      if (row === 1) {
        className += "top ";
      } else if (row === this.rows) {
        className += "bottom ";
      }
      if (column === 1) {
        className += "left";
      } else if (column === this.columns) {
        className += "right";
      }
      return className;
    },
    setChess(row, column, type) {
      console.log("ONCLICK", row, column, type);
      // this.$store.commit("SET_CHESS", {
      //   row,
      //   column,
      //   type
      // });
    }
  }
};
</script>

<style scoped lang="scss">
#chessBox {
  width: 500px;
  height: 500px;
  border: 1px solid #0776a6;
  // border: 1px solid #0776a6;
  background: #fff;
  // background: #194d6d;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  border-radius: 6px;
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

.chess {
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-position: center center;
  background-size: cover;
  &:hover {
    background-image: url("../../assets/board/chess-b.png");
  }
  &.white {
    background-image: url("../../assets/board/chess-w.png");
  }
  &.black {
    background-image: url("../../assets/board/chess-b.png");
  }
}
</style>
