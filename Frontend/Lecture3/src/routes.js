import Home from "./components/Home.vue";
import RecipeSearch from "./components/recipes/RecipeSearch.vue";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/recipes/search",
    component: RecipeSearch
  }
];
