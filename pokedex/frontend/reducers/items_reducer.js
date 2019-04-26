import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      const nextState = merge({}, action.items);
      return nextState;
    case RECEIVE_POKE:
      return merge({}, state, action.payload.items);
    default:
      return state;
  }
}

export default itemsReducer;