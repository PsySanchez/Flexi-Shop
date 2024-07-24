import {
  ADD_PRODUCT,
  UPDATE_PRODUCTS,
  DELETE_PRODUCT,
  ADD_CATEGORY,
  REQUEST_PRODUCTS,
  REQUEST_CATEGORIES,
} from "../types/reduxTypes";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
}

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
}

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    payload: products,
  };
}

export function fetchProducts() {
  return {
    type: REQUEST_PRODUCTS,
  };
}

export function fetchCategories() {
  return {
    type: REQUEST_CATEGORIES,
  };
}
