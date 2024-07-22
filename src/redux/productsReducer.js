import { UPDATE_PRODUCTS } from "../types/reduxTypes";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
