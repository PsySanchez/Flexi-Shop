import {
  ADD_PRODUCT,
  UPDATE_PRODUCTS,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
} from "../types/reduxTypes";

const initialState = {
  products: [],
  categories: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
