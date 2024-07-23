import { UPDATE_PRODUCTS } from "../types/reduxTypes";
import { hideLoader } from "./appAction";

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
      dispatch(hideLoader());
      dispatch(updateProducts(products));
    };
  } catch (error) {
    console.error(error);
  }
}
