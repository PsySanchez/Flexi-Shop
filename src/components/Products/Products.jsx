import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, fetchCategories } from "../../actions/productAction";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Products.css";

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    setFilteredProducts(products);
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
  }, [dispatch, categories]);

  const changeInputHandler = (event) => {
    const { name, value } = event.target;
    if (value) {
      setFilteredProducts(
        products.filter((product) => product.category === value)
      );
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="products-container">
      {/* filter products by category */}
      <div className="col-md-10">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select "
          id="category"
          name="category"
          onChange={changeInputHandler}
        >
          <option value="" key={"chooseCategory"}>
            Choose category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.map((product) => (
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
