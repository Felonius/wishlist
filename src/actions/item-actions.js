let nextItemId = 8

export const FILTER_ITEMS = 'FILTER_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function filterItems(wishId) {
  return {
    type: FILTER_ITEMS,
    payload: { wishId }
  }
}
export function addItem(wishId, name, img, url, price) {
  nextItemId++;
  return {
    type: ADD_ITEM,
    payload: { wishId, id: nextItemId, name, img, url, price }
  }
}
export function updateItem(wishId, id, name, img, url, price) {
  return {
    type: UPDATE_ITEM,
    payload: { wishId, id, name, img, url, price }
  }
}
export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: { id }
  }
}