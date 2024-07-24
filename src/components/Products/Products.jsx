import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../actions/productAction";

import "./Products.css";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="card" style={{ width: "18rem" }} key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top"
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <li key={product.id}>
  <h2>{product.title}</h2>
  <p>{product.description}</p>
  <p>${product.price}</p>
  <img src={product.image} alt={product.title} width="300" />
</li>; */
}
