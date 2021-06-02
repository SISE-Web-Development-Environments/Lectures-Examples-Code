<template>
  <div style="background-color: red; padding: 10px">
    <h2>
      I am global, here is the counter: {{ $store.state.pokemon_counter }}
    </h2>
    <input
      type="text"
      v-model="new_pokemon"
      placeholder="write pokemon's name"
    />
    <button @click="add_new_pokemon">catch pokemon</button>
    <button @click="$store.actions.pokemon_go()">Pokemon go!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      new_pokemon: "",
    };
  },
  methods: {
    add_new_pokemon() {
      this.$store.actions.catch_pokemon(this.new_pokemon);
      debugger;
      this.new_pokemon = "";
    },
  },
};
</script>

<style></style>
