<!-- Created by anyc on 2018-12-10. 开始页面 -->
<template>
  <div style="height:100%" flex="main:center cross:center">
    <div class="welcome" flex="dir:top box:first cross:center main:center">
      <div class="logo">
        欢迎使用
      </div>
      <div style="width:100%;" flex="dir:top box:mean">
        <div flex="main:center cross:center">
          <router-link class="btn" to="/ChessBoard">先手开始游戏</router-link>
        </div>
        <div flex="main:center cross:center">
          <router-link class="btn" to="/">后手开始游戏</router-link>
        </div>
        <div flex="main:center cross:center">
          <router-link class="btn" to="/">建立主机</router-link>
        </div>
        <div flex="main:center cross:center">
          <router-link class="btn" to="/">加入游戏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      // data
    };
  }
};
</script>

<style lang="less" scoped>
.welcome {
  width: @page-width;
  height: @page-height;
  text-align: center;
  background: @background-color;
  border: 1px solid @praimy-boder;
  border-radius: @box-border-radius;
  box-shadow: 0px 2px 8px @title-color;
}
.btn {
  .btn();
  font-size: @title-size;
  font-weight: bold;
  padding: 10px 16px;
}
.logo {
  margin: 20px 0;
  font-size: 36px;
  color: @light-txt;
}
</style>
