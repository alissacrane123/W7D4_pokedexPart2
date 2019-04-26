import { combineReducers } from 'redux';
import pokemonReducer from '../reducers/pokemon_reducer';
import itemsReducer from '../reducers/items_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer
})

export default entitiesReducer;