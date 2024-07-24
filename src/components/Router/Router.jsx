import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../Main/About";
import { Products, AddCategory, AddProduct } from "../Products";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/products" element={<Products />} />
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
    </Routes>
  );
}
