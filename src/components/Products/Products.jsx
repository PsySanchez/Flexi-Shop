import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../actions/productAction";
import { Link } from "react-router-dom";

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
        <Link to={`/product/${product.id}`} key={product.id} className="btn">
          <div className="card" style={{ width: "18rem", height: "100%" }}>
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top"
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
