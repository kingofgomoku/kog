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

<style lang="scss" scoped></style>
