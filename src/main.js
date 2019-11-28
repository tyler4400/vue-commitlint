import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import lodash from "lodash";
import "./rewriteConsle";
Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, "$_", {
  value: lodash,
  writable: false,
  configurable: false
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
