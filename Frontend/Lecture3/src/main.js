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

import { shared_data } from "./shared_data";
Vue.prototype.$store = shared_data;

Vue.config.devtools = true;

new Vue({
  el: "#app",
  router, // ES6: Same as writing routes:routes

  render: h => h(App)
});