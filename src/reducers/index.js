import { combineReducers } from 'redux';
import wishReducer from './wish-reducer';
import listReducer from './list-reducer';

const allReducers = {
  wishes: wishReducer,
  lists: listReducer,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;