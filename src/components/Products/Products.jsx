import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../actions/productAction";
import { showLoader } from "../../actions/appAction";

import "./Products.css";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(showLoader());

      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} width="300" />
          </li>
        ))}
      </ul>
    </div>
  );
}
