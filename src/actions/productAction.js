import { UPDATE_PRODUCTS } from "../types/reduxTypes";

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    payload: products,
  };
}

export function fetchProducts() {
  try {
    return async (dispatch) => {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      dispatch(updateProducts(products));
    };
  } catch (error) {
    console.error(error);
  }
}
