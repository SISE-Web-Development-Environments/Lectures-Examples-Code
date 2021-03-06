import Home from "./views/Home.vue";
import Search from "./views/Search.vue";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/search/:name",
    component: Search
  },
  {
    path: "/search",
    component: Search
  },
  { path: "*", redirect: "/" }
];
