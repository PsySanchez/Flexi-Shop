import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";
import { useEffect } from "react";
import { fetchSelectedProduct } from "../../actions/productAction";

export default function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector((state) => state.products.products);

  // get product from store or fetch it
  let product =
    products.find((p) => p.id === parseInt(id)) ||
    useSelector((state) => state.products.selectedProduct);

  useEffect(() => {
    if (!product.title) {
      dispatch(fetchSelectedProduct(id));
    }
  }, [id, product]);

  if (!product?.title) return <p>Product not found</p>;

  return (
    <div className="product-wraper">
      <h4 className="">{product.title}</h4>
      <img src={product.image} alt={product.title} width={300} />
      <p className="text">{product.description}</p>
      <p>Price: {product.price}$</p>
    </div>
  );
}
