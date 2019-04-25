import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const nextState = merge({}, action.pokemon);
      return nextState;
    default:
      return state; 
  }
}

export default pokemonReducer;