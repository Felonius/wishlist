import { ADD_TO_WISH } from '../actions/wish-actions';

const initialState = {
  wishes:[
    {
      id:1,
      title: 'Some List',
      description: 'A list is a list is a list',
    },
    {
      id:2,
      title: 'Another fine list you\'ve gotten me in to',
      description: 'There once was a list from yeiling, who was in particular need of some healing.',
    },
  ],
}

export default function (state=initialState, action) {
  switch (action.type) {
    case ADD_TO_WISH: {
      return {
        ...state,
        wishes: [...state, action.payload]
      }
    }
    default:
      return state;
  }
}