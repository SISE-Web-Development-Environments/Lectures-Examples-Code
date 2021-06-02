import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router"; // <----

Vue.use(VueRouter);
import { routes } from "./routes";
const router = new VueRouter({
  routes
});

import GlobalTest from "./components/Global.vue";
Vue.component("GlobalTest", GlobalTest);

import { state as store_state, actions as store_actions } from "./store";

const state = Vue.observable(store_state)
const actions = Vue.observable(store_actions)
const store = { state: state, actions: actions }


Vue.prototype.$store = store;

Vue.config.devtools = true;

new Vue({
  el: "#app",
  router, // ES6: Same as writing routes:routes
  render: h => h(App)
});
