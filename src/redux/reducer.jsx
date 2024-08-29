import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { appReducer } from "./appReducer";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";

export const reducer = combineReducers({
  app: appReducer,
  products: productsReducer,
  auth: authReducer,
  cart: cartReducer,
});
