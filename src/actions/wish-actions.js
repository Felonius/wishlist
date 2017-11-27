export const ADD_TO_WISH = 'ADD_TO_WISH';

export function addToWish(title, description) {
  return {
    type: ADD_TO_WISH,
    payload: { title, description }
  }
}