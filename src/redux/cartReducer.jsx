import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_CART,
  UP_QUANTITY,
  DOWN_QUANTITY,
} from "../types/reduxTypes";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CART:
      return action.payload;
    case ADD_TO_CART:
      //check if product is already in cart
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      }

      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);
    case UP_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    case DOWN_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    default:
      return state;
  }
};
