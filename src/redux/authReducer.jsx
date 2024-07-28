import {
  LOGIN,
  REGISTER,
  LOGOUT,
  SET_USER,
  IS_LOADING,
} from "../types/reduxTypes";

const initialState = {
  user: null,
  isLoading: true,
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
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
