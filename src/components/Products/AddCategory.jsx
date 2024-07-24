import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../../actions/appAction";
import { fetchCategories } from "../../actions/productAction";
import { DANGER } from "../../types/alertTypes";

export default function AddCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  const [form, setForm] = useState({
    category: "",
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
      hasError: !prev.category.trim(),
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (categories.includes(form.category)) {
      dispatch(showAlert("Category already exists", DANGER));
    } else {
      const { category } = form;
      console.log("Add category", category);
    }
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <h2>Add Category</h2>
      <div className="col-md-10">
        <label htmlFor="title" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          value={form.category}
          name="category"
          placeholder="Enter category name"
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
  );
}
