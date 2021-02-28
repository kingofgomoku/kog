import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-vue";
import "./registerServiceWorker";

import "./style/app.scss";

import "./plugins/bootstrap";
import "./plugins/vue-meta";
import "./plugins/axios";
import "./plugins/fontawesome";

Amplify.configure(awsconfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
