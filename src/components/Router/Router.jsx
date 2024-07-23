import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Router() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const protectedRoutes = ["/profile"];

  useEffect(() => {
    if (!user?.token && protectedRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, [user, location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
