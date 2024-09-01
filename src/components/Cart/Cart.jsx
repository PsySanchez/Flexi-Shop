import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../actions/cartAction";
import "./Cart.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log("🚀 ~ Cart ~ cart:", cart)
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart?.length === 0 && <p>Cart is empty</p>}
      {cart?.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <div>
            <h4>{product.title}</h4>
            <p>Price: {product.price}$</p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeHandler(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
