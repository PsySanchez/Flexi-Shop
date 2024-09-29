import {
  REMOVE_FROM_CART,
  REQUEST_CART,
  REQUEST_ADD_PRODUCT_TO_CART,
  REQUEST_DOWN_QUANTITY,
  REQUEST_UP_QUANTITY,
} from "../types/reduxTypes";

export function fetchCart() {
  return {
    type: REQUEST_CART,
  };
}

export function addToCart(product) {
  return {
    type: REQUEST_ADD_PRODUCT_TO_CART,
    payload: product,
  };
}

export function downQuantity(id) {
  return {
    type: REQUEST_DOWN_QUANTITY,
    payload: id,
  };
}

export function upQuantity(id) {
  return {
    type:REQUEST_UP_QUANTITY,
    payload: id,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}
