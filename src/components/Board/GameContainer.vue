<template>
  <div class="mr-1 d-flex">
    <div>
      <ChessBox />
    </div>
  </div>
</template>

<script>
import ChessBox from "@/components/Board/ChessBoard";

export default {
  name: "GameContainer",
  components: {
    ChessBox
  }
};
</script>

<style lang="scss" scoped></style>
