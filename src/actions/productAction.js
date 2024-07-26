import {
  ADD_PRODUCT,
  REQUEST_DELETE_PRODUCT,
  ADD_CATEGORY,
  REQUEST_PRODUCTS,
  REQUEST_CATEGORIES,
  REQUEST_SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  REQUEST_UPDATE_SINGLE_PRODUCT,
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
    type: REQUEST_DELETE_PRODUCT,
    payload: id,
  };
}

export function fetchProducts() {
  return {
    type: REQUEST_PRODUCTS,
  };
}

export function fetchSelectedProduct(id) {
  return {
    type: REQUEST_SELECTED_PRODUCT,
    payload: id,
  };
}

export function removeSelectedProduct() {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
}

export function fetchCategories() {
  return {
    type: REQUEST_CATEGORIES,
  };
}

export function updateSingleProduct(product) {
  return {
    type: REQUEST_UPDATE_SINGLE_PRODUCT,
    payload: product,
  };
}
