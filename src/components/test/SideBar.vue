<template>
  <div class="sideBar" flex="dir:top main:justify cross:center">
    <div
      class="m-infos info-ai"
      flex-box="1"
      flex="main:center cross:center dir:top"
    >
      <div class="chess black"></div>
      Computer
    </div>
    <div class="m-ctrl" flex-box="0">
      <button class="btn">悔棋</button>
      <button class="btn">认输</button>
      <button class="btn">Start</button>
      <button class="btn">Undo</button>
    </div>

    <div
      class="m-infos info-player"
      flex-box="1"
      flex="main:center cross:center dir:top"
    >
      <div class="chess white"></div>
      Player
    </div>
  </div>
</template>

<script>
export default {
  name: "sideBar",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.m-sideBar() {
  background: @background-color;
  border: 1px solid @praimy-boder;
  border-radius: @box-border-radius;
  box-shadow: 0px 2px 8px @title-color;
}
.sideBar {
  margin-left: 20px;
  height: @page-height;
  text-align: center;
}
.m-infos,
.m-ctrl {
  width: 180px;
  .m-sideBar();
  color: @light-txt;
}
.m-ctrl {
  margin: 20px 0;
}
.chess {
  width: 38px;
  height: 38px;
  background-position: center center;
  background-size: cover;
  &.white {
    background-image: @chess-w;
  }
  &.black {
    background-image: @chess-b;
  }
}
.btn {
  .btn();
  margin: 15px 0;
  font-size: @btn-size;
}
</style>
