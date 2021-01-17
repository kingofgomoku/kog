<template>
  <div id="chess-box" flex="dir:top box:mean">
    <div flex="box:mean" v-for="row in rows" :key="row">
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
      this.$store.commit("SET_CHESS", {
        row,
        column,
        type
      });
    }
  }
};
</script>

<style scoped lang="less">
#chess-box {
  width: 80vh;
  height: 80vh;
  border: 1px solid #0776a6;
  background: #194d6d;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  border-radius: 6px;
}
.cell {
  background: @cell-bg center center no-repeat;

  &.left {
    background-image: @cell-bg-l;
  }

  &.right {
    background-image: @cell-bg-r;
  }

  &.top {
    background-image: @cell-bg-t;

    &.left {
      background-image: @cell-bg-tl;
    }

    &.right {
      background-image: @cell-bg-tr;
    }
  }
  &.bottom {
    background-image: @cell-bg-b;

    &.left {
      background-image: @cell-bg-bl;
    }

    &.right {
      background-image: @cell-bg-br;
    }
  }
}

.chess {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-position: center center;
  background-size: cover;
  &:hover {
    background-image: @chess-b;
  }
  &.white {
    background-image: @chess-w;
  }
  &.black {
    background-image: @chess-b;
  }
}
</style>
