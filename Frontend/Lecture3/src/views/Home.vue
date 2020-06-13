<template>
  <!-- <div>
  </div>-->

  <div>
    <h1>Home Page</h1>
    <RecipePreview v-for="i in 3" :key="i"></RecipePreview>
  </div>
</template>

<script>
import RecipePreview from "../components/recipes/RecipePreview";
export default {
  name: "Home",
  components: { RecipePreview }
};
</script>

<style></style>;
