import { jwtDecode } from "jwt-decode";
import {
  SET_USER,
  LOGOUT,
  REGISTER,
  IS_LOADING,
  REQUEST_LOGIN,
} from "../types/reduxTypes";

export function login(username, password) {
  return {
    type: REQUEST_LOGIN,
    payload: { username, password },
  };
}

export function logout() {
  // remove token from local storage
  localStorage.removeItem("token");

  return {
    type: LOGOUT,
  };
}

export function register(user, password) {
  return {
    type: REGISTER,
    payload: { user, password },
  };
}

export function setUser(token) {
  const { user } = jwtDecode(token);
  return {
    type: SET_USER,
    payload: { name: user, token },
  };
}

export function checkAuth() {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(setUser(token));
    }
    dispatch(isLoading(false));
  };
}

export function isLoading(loading) {
  return {
    type: IS_LOADING,
    payload: loading,
  };
}
