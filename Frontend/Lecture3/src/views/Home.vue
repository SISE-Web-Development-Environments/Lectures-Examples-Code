<template>
  <!-- <div>
  </div>-->

  <div style="background-color: yellow; padding: 20px">
    <h1>Home Page</h1>
    <h2>Show me some pokemons</h2>
    <span v-for="pok_name in pokemonsList" :key="pok_name">
      <pokemon-preview :pok_name="pok_name"></pokemon-preview>
    </span>
    <GlobalTest></GlobalTest>
  </div>
</template>

<script>
import PokemonPreview from "../components/pokemons/pkemon_preview";

export default {
  name: "Home",
  components: { PokemonPreview },
  computed: {
    pokemonsList() {
      return this.$store.state.pokemons;
    },
  },
};
</script>

<style></style>;
