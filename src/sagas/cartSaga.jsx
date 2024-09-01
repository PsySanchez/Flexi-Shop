import { put, call } from "redux-saga/effects";
import { FETCH_CART, ADD_TO_CART } from "../types/reduxTypes";
import { hideLoader, showAlert, showLoader } from "../actions/appAction";

export function* sagaWorkerFetchProducts() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchProducts);
    yield put(hideLoader());
    yield put({ type: FETCH_CART, payload });
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

export function* sagaWorkerAddToCart(action) {
  try {
    yield put(showLoader());
    const payload = yield call(addToCart, action.payload);
    yield put(hideLoader());
    yield put({ type: ADD_TO_CART, payload });
    yield put(showAlert("Product added to cart"));
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function addToCart(product) {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   return await response.json();
  return product;
}
