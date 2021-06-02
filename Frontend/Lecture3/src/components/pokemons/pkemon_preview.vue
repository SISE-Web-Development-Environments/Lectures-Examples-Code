<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ pok_name }}</h5>
      <p class="card-text">
        Here we can also add more info regarding our pokemon
      </p>
      <a
        target="_blank"
        :href="`https://www.pokemon.com/us/pokedex/${pok_name}`"
        class="btn btn-primary"
        >Get more data</a
      >
    </div>
    <img
      :src="get_image(pok_name)"
      class="card-img-bottom"
      style="height: 200px; width: auto"
    />
  </div>
</template>

<script>
import Pokemon from "pokemon-images";

export default {
  name: "PokemonPreview",
  props: { pok_name: { require: true } },
  methods: {
    get_image(pok_name) {
      try {
        return Pokemon.getSprite(pok_name);
      } catch (err) {
        return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png";
      }
    },
  },
};
</script>

<style>
.card {
  width: 18rem;
  display: inline-block;
  margin: 10px;
}
</style>