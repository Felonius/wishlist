import { combineReducers } from 'redux';
import wishReducer from './wish-reducer';
import itemReducer from './item-reducer';

const allReducers = {
  wishes: wishReducer,
  items: itemReducer,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;