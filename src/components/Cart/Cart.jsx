import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, fetchCart, addToCart } from "../../actions/cartAction";
import "./Cart.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const upQuantity = (id) => {
    const product = cart.find((product) => product.id === id);
    dispatch(addToCart(product));
  };

  const downQuantity = (id) => {
    console.log("up", id);

    // dispatch(downQuantity(id));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart?.length === 0 && <p>Cart is empty</p>}
      {cart?.map((product) => (
        <div key={product.id} className="cart-item">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div>
            <h4>{product.title}</h4>
            <h6>Quantity</h6>
            <div className="quantity-wrapper">
              <button onClick={() => upQuantity(product.id)}>+</button>
              <p>{product.quantity}</p>
              <button onClick={() => downQuantity(product.id)}>-</button>
            </div>
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
