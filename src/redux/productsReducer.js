import {
  ADD_PRODUCT,
  UPDATE_PRODUCTS,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  FETCH_SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  UPDATE_SINGLE_PRODUCT,
} from "../types/reduxTypes";

const initialState = {
  products: [],
  categories: [],
  selectedProduct: {},
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
    case FETCH_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: {},
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
    case UPDATE_SINGLE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return state;
  }
};
