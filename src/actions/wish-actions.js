let nextWishId = 2

export const ADD_WISH = 'ADD_WISH';

export function addWish(title, description) {
  nextWishId++;

  return {
    type: ADD_WISH,
    payload: { id: nextWishId, title, description }
  }
}