import { jwtDecode } from "jwt-decode";
import { showAlert } from "./appAction";
import { SUCCESS, ERROR } from "../types/alertTypes";
import { SET_USER, LOGOUT, REGISTER } from "../types/reduxTypes";

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
    payload: { user, token },
  };
}
