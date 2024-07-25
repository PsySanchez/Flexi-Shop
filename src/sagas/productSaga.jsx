import { put, call } from "redux-saga/effects";
import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  FETCH_SELECTED_PRODUCT,
} from "../types/reduxTypes";
import { hideLoader, showAlert, showLoader } from "../actions/appAction";

export function* sagaWorkerFetchProducts() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchProducts);
    yield put({ type: FETCH_PRODUCTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
}

export function* sagaWorkerFetchCategories() {
  try {
    const payload = yield call(fetchCategories);
    yield put({ type: FETCH_CATEGORIES, payload });
  } catch (e) {
    yield put(showAlert("Something went wrong"));
  }
}

async function fetchCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return await res.json();
}

export function* sagaWorkerFetchSelectedProduct(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchSingleProduct, action.payload);
    yield put({ type: FETCH_SELECTED_PRODUCT, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function fetchSingleProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
}
