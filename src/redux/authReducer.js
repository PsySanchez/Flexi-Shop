import { LOGIN, REGISTER, LOGOUT, SET_USER } from "../types/reduxTypes";

export const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
