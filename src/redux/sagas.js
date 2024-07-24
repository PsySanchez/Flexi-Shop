import { takeEvery, put, call } from "redux-saga/effects";
import {
  FETCH_PRODUCTS,
  REQUEST_PRODUCTS,
  FETCH_CATEGORIES,
  REQUEST_CATEGORIES,
} from "../types/reduxTypes";
import { hideLoader, showAlert, showLoader } from "../actions/appAction";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PRODUCTS, sagaWorkerFetchProducts);
  yield takeEvery(REQUEST_CATEGORIES, sagaWorkerFetchCategories);
}

function* sagaWorkerFetchProducts() {
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

function* sagaWorkerFetchCategories() {
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
