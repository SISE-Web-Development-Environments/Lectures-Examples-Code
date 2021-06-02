
const state = {
  server_domain: "localhost:3000/",
  league: "poke-ligaga",
  pokemons: [],
  pokemon_counter: 0
};

const actions = {

  catch_pokemon: (new_pokemon) => {
    if (new_pokemon === "")
      return
    state.pokemons.push(new_pokemon)
    actions.count_pokemons()
  },
  pokemon_go: () => {
    state.pokemons.pop()
    actions.count_pokemons()
  },
  count_pokemons: () => {
    state.pokemon_counter = state.pokemons.length
  },
  initiate: () => {
    ["Charmander", "Pikachu", "Bulbasaur"].forEach(pok => {
      actions.catch_pokemon(pok)
    });
  }
}




export { state, actions };