export const FILTER_LIST = 'FILTER_LIST';
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const UPDATE_TO_LIST = 'UPDATE_TO_LIST';
export const DELETE_FROM_LIST = 'DELETE_FROM_LIST';

export function filterList(wishId) {
  return {
    type: FILTER_LIST,
    payload: { wishId }
  }
}
export function addToList(name, img, url, price) {
  return {
    type: ADD_TO_LIST,
    payload: { name, img, url, price }
  }
}
export function updateToList(id, name, img, url, price) {
  return {
    type: ADD_TO_LIST,
    payload: { id, name, img, url, price }
  }
}
export function deleteFromList(id) {
  return {
    type: ADD_TO_LIST,
    payload: { id }
  }
}