import {
  REMOVE_FROM_CART,
  REQUEST_CART,
  REQUEST_ADD_PRODUCT_TO_CART,
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

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}
