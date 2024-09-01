import { takeEvery } from "redux-saga/effects";
import {
  REQUEST_PRODUCTS,
  REQUEST_SELECTED_PRODUCT,
  REQUEST_CATEGORIES,
  REQUEST_LOGIN,
  REQUEST_ADD_PRODUCT,
  REQUEST_UPDATE_SINGLE_PRODUCT,
  REQUEST_DELETE_PRODUCT,
  REQUEST_ADD_PRODUCT_TO_CART,
} from "../types/reduxTypes";

import {
  sagaWorkerFetchCategories,
  sagaWorkerFetchProducts,
  sagaWorkerFetchSelectedProduct,
  sagaWorkerAddProduct,
  sagaWorkerUpdateSingleProduct,
  sagaWorkerDeleteProduct,
} from "./productSaga";

import { sagaWorkerLogin } from "./authSaga";

import { sagaWorkerAddToCart } from "./cartSaga";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PRODUCTS, sagaWorkerFetchProducts);
  yield takeEvery(REQUEST_SELECTED_PRODUCT, sagaWorkerFetchSelectedProduct);
  yield takeEvery(REQUEST_CATEGORIES, sagaWorkerFetchCategories);
  yield takeEvery(REQUEST_ADD_PRODUCT, sagaWorkerAddProduct);
  yield takeEvery(REQUEST_LOGIN, sagaWorkerLogin);
  yield takeEvery(REQUEST_UPDATE_SINGLE_PRODUCT, sagaWorkerUpdateSingleProduct);
  yield takeEvery(REQUEST_DELETE_PRODUCT, sagaWorkerDeleteProduct);
  yield takeEvery(REQUEST_ADD_PRODUCT_TO_CART, sagaWorkerAddToCart);
}
