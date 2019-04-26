import { combineReducers } from 'redux';
import entitiesReducer from '../reducers/entities_reducer';
import uiReducer from '../reducers/ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
});
export default rootReducer