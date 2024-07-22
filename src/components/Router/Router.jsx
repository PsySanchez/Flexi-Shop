import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Profile from "../Profile/Profile";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
