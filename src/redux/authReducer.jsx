import {
  LOGIN,
  REGISTER,
  LOGOUT,
  SET_USER,
  INITIALIZING,
} from "../types/reduxTypes";

const initialState = {
  user: null,
  isInit: false,
};

export const authReducer = (state = initialState, action) => {
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
    case INITIALIZING:
      return {
        ...state,
        isInit: action.payload,
      };

    default:
      return state;
  }
};
