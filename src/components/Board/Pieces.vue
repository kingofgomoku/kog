<template>
  <div class="chess" :class="computeState" @click="setChess"></div>
</template>

<script>
export default {
  name: "Pieces",
  props: {
    details: {
      type: Object,
      required: true
    },
    playerturn: {
      type: String,
      required: true
    },
    row: {
      type: Number,
      required: true
    },
    column: {
      type: Number,
      required: true
    }
  },
  computed: {
    computeState() {
      if (
        Object.keys(this.details).length === 0 &&
        this.details.constructor === Object
      ) {
        return "";
      } else {
        return {
          black: this.details.color === "black",
          white: this.details.color === "white"
        };
      }
    }
  },
  methods: {
    setChess() {
      console.log("ONCLICK", this.details);
      this.$store.dispatch("gameUpdateGameBoard", {
        action: "click",
        color: this.playerturn,
        row: this.row,
        column: this.column,
        player: this.details
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.chess {
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-position: center center;
  background-size: cover;
  &:hover {
    box-shadow: 0 0 10px #1e1e1e;
    -webkit-box-shadow: 0 0 10px #1e1e1e;
    -moz-box-shadow: 0 0 10px #1e1e1e;
    border-radius: 1rem;
    -moz-border-radius: 1rem;
    -webkit-border-radius: 1rem;
    transition: all 0.1s;
  }
  &.white {
    background-image: url("../../assets/board/chess-w.png");
  }
  &.black {
    background-image: url("../../assets/board/chess-b.png");
  }
}

// .alertActionButton {
//   height: 18px;
//   width: 18px;
//   border-radius: 100px;
//   -moz-border-radius: 100px;
//   -webkit-border-radius: 100px;
//   border: 2px solid #cccccc;
// }
// .alertActionButton:hover {
//   box-shadow: 0 0 10px #1e1e1e;
//   -webkit-box-shadow: 0 0 10px #1e1e1e;
//   -moz-box-shadow: 0 0 10px #1e1e1e;
//   border-radius: 1rem;
//   -moz-border-radius: 1rem;
//   -webkit-border-radius: 1rem;
//   transition: all 0.2s;
// }
</style>
