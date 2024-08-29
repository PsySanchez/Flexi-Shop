import { REMOVE_FROM_CART, ADD_TO_CART } from "../types/reduxTypes";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}
