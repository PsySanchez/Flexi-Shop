import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSingleProduct } from "../../actions/productAction";
import { deleteProduct } from "../../actions/productAction";
import Loader from "../Loader/Loader";
import "./Product.css";
import { showModal } from "../../actions/appAction";

export default function EditProduct({ product }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading);

  const [form, setForm] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    image: "",
    hasError: true,
  });

  useEffect(() => {
    setForm(product);
  }, [product]);

  const changeInputHandler = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setForm((prev) => ({
      ...prev,
      hasError:
        !prev.category.trim() ||
        !prev.title.trim() ||
        !prev.description.trim() ||
        !prev.price.trim() ||
        !prev.image.trim(),
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(updateSingleProduct(form));
  };

  const deleteHandler = () => {
    dispatch(
      showModal({
        title: "Delete product",
        text: "Are you sure you want to delete this product?",
        btnSuccess: "Delete",
        btnCancel: "Cancel",
        width: "400px",
      })
    );
    // dispatch(deleteProduct(form.id));
  };

  return (
    <div className="product-wraper">
      <form className="form" disabled={loading}>
        <h4>Edit product</h4>

        <div className="col-md-10">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={product.title}
            onChange={changeInputHandler}
          />
        </div>
        <div className="col-md-10">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control textarea"
            id="description"
            name="description"
            value={product.description}
            onChange={changeInputHandler}
          />
        </div>
        <div className="col-md-10">
          <label htmlFor="price" className="form-label">
            Price in $
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={changeInputHandler}
          />
        </div>
        <div className="col-md-10">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={product.image}
            onChange={changeInputHandler}
          />
        </div>
        <div className="buttons-wrapper">
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteHandler}
            disabled={loading}
          >
            Delete
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
            disabled={loading}
          >
            Save
          </button>
          {loading && <Loader />}
        </div>
      </form>
    </div>
  );
}
