import { put, call } from "redux-saga/effects";
import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  FETCH_SELECTED_PRODUCT,
  UPDATE_SINGLE_PRODUCT,
  ADD_PRODUCT,
} from "../types/reduxTypes";
import { hideLoader, showAlert, showLoader } from "../actions/appAction";

export function* sagaWorkerFetchProducts() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchProducts);
    yield put(hideLoader());
    yield put({ type: FETCH_PRODUCTS, payload });
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
    const payload = yield call(fetchSelectedProduct, action.payload);
    yield put({ type: FETCH_SELECTED_PRODUCT, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function fetchSelectedProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
}

export function* sagaWorkerAddProduct(action) {
  try {
    yield put(showLoader());
    const payload = yield call(addProduct, action.payload);
    payload["alreadyAdded"] = true;
    console.log("🚀 ~ function*sagaWorkerAddProduct ~ payload:", payload);
    yield put({ type: FETCH_SELECTED_PRODUCT, payload });
    yield put({ type: ADD_PRODUCT, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function addProduct(product) {
  const res = await fetch("https://fakestoreapi.com/products", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(product),
  });
  return await res.json();
}

export function* sagaWorkerUpdateSingleProduct(action) {
  try {
    yield put(showLoader());
    const payload = yield call(updateSingleProduct, action.payload);
    yield put({ type: UPDATE_SINGLE_PRODUCT, payload });
    yield put(hideLoader());
    yield put(showAlert("Product updated successfully"));
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function updateSingleProduct(product) {
  const res = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(product),
  });
  return await res.json();
}

export function* sagaWorkerDeleteProduct(action) {
  try {
    yield put(showLoader());
    yield call(deleteProduct, action.payload);
    yield put(hideLoader());
    yield put(showAlert("Product deleted successfully"));
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function deleteProduct(id) {
  await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
}
