import { put, call } from "redux-saga/effects";
import { LOGIN } from "../types/reduxTypes";
import { hideLoader, showAlert, showLoader } from "../actions/appAction";
import { jwtDecode } from "jwt-decode";

export function* sagaWorkerLogin(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchLogin, action.payload);
    if (!payload.token) {
      yield put(showAlert("Invalid login or password"));
      return;
    }

    localStorage.setItem("token", payload.token);
    const { user } = jwtDecode(payload.token);

    yield put({ type: LOGIN, payload: { name: user, token: payload.token } });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
  }
}

async function fetchLogin(data) {
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
}
