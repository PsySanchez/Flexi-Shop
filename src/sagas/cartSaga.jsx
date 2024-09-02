import { put, call } from "redux-saga/effects";
import { FETCH_CART, ADD_TO_CART } from "../types/reduxTypes";
import { hideLoader, showAlert, showLoader } from "../actions/appAction";

export function* sagaWorkerFetchCart() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchCart);
    yield put(hideLoader());
    yield put({ type: FETCH_CART, payload });
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function fetchCart() {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   return await res.json();
  return JSON.parse(localStorage.getItem("cart")) || [];
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
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  const existingProduct = cart.find((item) => item.id === product.id);

  if (!existingProduct) {
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    return product;
  }

  cart = cart.map((item) => {
    if (item.id === product.id) {
      item.quantity += 1;
      return item;
    }
    return item;
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  return product;
}
