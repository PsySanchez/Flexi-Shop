import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#0d6efd" : "black",
                })}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="products"
                style={({ isActive }) => ({
                  color: isActive ? "#0d6efd" : "black",
                })}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#0d6efd" : "black",
                })}
              >
                About
              </NavLink>
            </li>
            {!user && (
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#0d6efd" : "black",
                  })}
                >
                  Login
                </NavLink>
              </li>
            )}
            {!user && (
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#0d6efd" : "black",
                  })}
                >
                  Sign Up
                </NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item dropdown">
                <Dropdown />
              </li>
            )}
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
}
