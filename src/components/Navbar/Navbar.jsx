import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../actions/appAction";

export default function Navbar() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const logoutHandler = () => {
    dispatch(
      showModal({
        title: "Logout",
        text: "Are you sure you want to logout?",
        btnSuccess: "Logout",
        btnCancel: "Cancel",
      })
    );
  };

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
            <li className="nav-item dropdown">
              <Dropdown />
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
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#0d6efd" : "black",
                  })}
                >
                  Profile
                </NavLink>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#0d6efd" : "black",
                  })}
                  onClick={logoutHandler}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
}
