import Vue from "vue";
import App from "./App.vue";

Vue.config.devtools = true;

let app = new Vue({
  el: "#app",
  render: h => h(App)
});

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
