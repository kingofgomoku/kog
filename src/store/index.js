import Vue from "vue";
import Vuex from "vuex";
import game from "./game";
import user from "./user";
import app from "./app";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    user,
    app
  }
});
