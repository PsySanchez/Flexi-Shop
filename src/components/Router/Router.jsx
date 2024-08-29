import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../Main/About";
import { Products, AddCategory, AddProduct, Product } from "../Products";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Cart from "../Cart/Cart";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";
import { checkAuth } from "../../actions/authAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Router() {
  const isInit = useSelector((state) => state.auth.isInit);
  const dispatch = useDispatch();
  useEffect(() => {
    // check if user is logged in
    dispatch(checkAuth());
  }, [dispatch]);

  if (!isInit) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/login"
        element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        }
      />
      <Route
        path="/register"
        element={
          <AuthRoute>
            <Register />
          </AuthRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/addProduct"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/addCategory"
        element={
          <ProtectedRoute>
            <AddCategory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
