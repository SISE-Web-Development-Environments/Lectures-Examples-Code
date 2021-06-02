<template>
  <div>
    <h1>Search Page</h1>
    <GlobalTest></GlobalTest>
    List of pokemons in store:
    <ul>
      <li v-for="pok in $store.state.pokemons" :key="pok">{{ pok }}</li>
    </ul>

    <h3>The pokemon in the url params is: {{ $route.params.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      myItems: this.$store.items,
    };
  },
  methods: {},
};
</script>

<style></style>
