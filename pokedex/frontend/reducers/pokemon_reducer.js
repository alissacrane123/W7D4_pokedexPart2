import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const nextState = merge({}, action.pokemon);
      return nextState;
    case RECEIVE_POKE:
      const newPoke = { [action.payload.pokemon.id]: action.payload.pokemon};
      return merge({}, state, newPoke);
    default:
      return state; 
  }
}

export default pokemonReducer;