import { combineReducers } from 'redux';
import pokemonReducer from '../reducers/pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
})

export default entitiesReducer;