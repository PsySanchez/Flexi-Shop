import { takeEvery } from "redux-saga/effects";
import {
  REQUEST_PRODUCTS,
  REQUEST_SELECTED_PRODUCT,
  REQUEST_CATEGORIES,
  REQUEST_LOGIN,
} from "../types/reduxTypes";

import {
  sagaWorkerFetchCategories,
  sagaWorkerFetchProducts,
  sagaWorkerFetchSelectedProduct,
} from "./productSaga";
import { sagaWorkerLogin } from "./authSaga";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PRODUCTS, sagaWorkerFetchProducts);
  yield takeEvery(REQUEST_SELECTED_PRODUCT, sagaWorkerFetchSelectedProduct);
  yield takeEvery(REQUEST_CATEGORIES, sagaWorkerFetchCategories);
  yield takeEvery(REQUEST_LOGIN, sagaWorkerLogin);
}
