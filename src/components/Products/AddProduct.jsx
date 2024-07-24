import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../actions/productAction";

export default function AddProduct() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  const [form, setForm] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    image: "",
    hasError: true,
  });

  useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
  }, [dispatch, categories]);

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

    const { userName, password } = form;
    dispatch(showLoader());
    dispatch(login(userName, password));
  };

  return (
    <div>
      <h2>AddProduct</h2>
      <form onSubmit={submitHandler} className="form">
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
            <option value="">Choose category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-10">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            name="title"
            placeholder="Enter title"
            onChange={changeInputHandler}
          />
        </div>
        <div className="col-md-10">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            name="description"
            placeholder="Enter description"
            onChange={changeInputHandler}
          />
        </div>
        <div className="col-md-10">
          <label htmlFor="price" className="form-label">
            Price in $
          </label>
          <input
            type="number"
            min={0}
            className="form-control"
            id="price"
            value={form.price}
            name="price"
            placeholder="Enter price in $"
            onChange={changeInputHandler}
          />
        </div>
        <div className="col-md-10">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            accept="image/png, image/jpeg"
            id="image"
            value={form.image}
            name="image"
            placeholder="Enter image"
            onChange={changeInputHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={form.hasError}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
