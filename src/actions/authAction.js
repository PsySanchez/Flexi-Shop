import { jwtDecode } from "jwt-decode";
import { hideLoader, showAlert } from "./appAction";
import { SUCCESS, ERROR } from "../types/alertTypes";
import { SET_USER, LOGOUT, REGISTER, IS_LOADING } from "../types/reduxTypes";

export function login(username, password) {
  try {
    return async (dispatch) => {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      dispatch(hideLoader());

      if (!res.ok) {
        switch (res.status) {
          case 404:
            dispatch(showAlert("User not found", ERROR));
            break;
          case 401:
            dispatch(showAlert("Invalid login or password", ERROR));
            break;
          default:
            dispatch(showAlert("Server error", ERROR));
            break;
        }
        return;
      }

      const data = await res.json();

      if (data?.token) {
        dispatch(showAlert("You are logged in", SUCCESS));
        dispatch(setUser(data.token));
      } else {
        dispatch(showAlert("Invalid login or password", ERROR));
        console.error(data);
      }
    };
  } catch (error) {
    console.error(error);
  }
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
  // save token to local storage
  localStorage.setItem("token", token);

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
