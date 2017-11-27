import { ADD_TO_WISH } from '../actions/wish-actions';

const initialState = {
  id:1,
  title: 'Some List',
  description: 'A list is a list is a list',
  list : [],
}


export default function (state=initialState, action) {
  switch (action.type) {
    case ADD_TO_WISH: {
      return {
        ...state,
        list: [...state, action.payload]
      }
    }
    default:
      return state;
  }
}