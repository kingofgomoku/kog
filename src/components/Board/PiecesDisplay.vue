<template>
  <div class="chessDisplay" :class="computeState"></div>
</template>

<script>
export default {
  name: "Pieces",
  props: {
    details: {
      type: Object,
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
  }
};
</script>

<style lang="scss" scoped></style>
