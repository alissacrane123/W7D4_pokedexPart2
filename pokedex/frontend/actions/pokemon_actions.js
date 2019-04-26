import * as PokemonAPIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePoke = payload => ({
  type: RECEIVE_POKE,
  payload
});

export const fetchPokemon = () => dispatch => (
  PokemonAPIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestAllPokemon = () => (dispatch) => (
  PokemonAPIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const fetchPoke = id => (dispatch) => (
  PokemonAPIUtil.fetchPoke(id).then(poke => dispatch(receivePoke(poke)))
);

// export const requestSinglePokemon = () => dispatch => {
//   dispatch({
//     type: "RECEIVE_POKE",
//     message: "this is a test message ??"
//   })
// }