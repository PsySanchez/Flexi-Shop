import { CHANGE_ROUTE } from "./types";

const initialState = {
  route: "",
};

export const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return { ...state, route: action.payload };
    default:
      return state;
  }
};

export const historyMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === CHANGE_ROUTE) {
    window.history.replaceState({}, "", action.payload);
  }
  return result;
};
