<template>
  <div class="p-1 ml-auto mr-auto d-flex">
    <div class="mr-1"></div>
    <div class="ml-1 mr-1">
      <ChessBox />
    </div>
    <div class="ml-1"></div>
  </div>
</template>

<script>
import ChessBox from "@/components/Board/ChessBoard";

export default {
  name: "GameContainer",
  components: {
    ChessBox
  },
  data() {
    return {
      key: true
    };
  }
};
</script>

<style lang="scss" scoped></style>
