import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";
import { useEffect, useState, useRef } from "react";
import { fetchSelectedProduct } from "../../actions/productAction";
import EditProduct from "./EditProduct";

export default function Product() {
  const [editProduct, setEditProduct] = useState(false);
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.auth.user);

  const imgRef = useRef(null);

  const fallbackSrc = "https://i.pravatar.cc/";

  // get product from store or fetch it
  let product =
    products.find((p) => p.id === parseInt(id)) ||
    useSelector((state) => state.products.selectedProduct);

  useEffect(() => {
    if (!product.title) {
      dispatch(fetchSelectedProduct(id));
    }
  }, [id, product]);

  const handleError = () => {
    setHasError(true);
  };

  if (!product?.title) return <p>Product not found</p>;

  return (
    <>
      {!editProduct && (
        <div className="product-wraper">
          <h4 className="">{product.title}</h4>
          <img
            alt={product.title}
            width={300}
            ref={imgRef}
            src={hasError ? fallbackSrc : product.image}
            onError={handleError}
          />
          <p className="text">{product.description}</p>
          <p>Price: {product.price}$</p>
          {user && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setEditProduct(true)}
            >
              Edit
            </button>
          )}
        </div>
      )}
      {editProduct && <EditProduct product={product} />}
    </>
  );
}
