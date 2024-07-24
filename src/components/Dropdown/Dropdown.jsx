import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "../../actions/appAction";

export default function Dropdown() {
  const dispatch = useDispatch();

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
    <div className="dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Pages
      </a>

      <ul className="dropdown-menu">
        <li>
          <NavLink to="/addCategory" className="dropdown-item">
            Add Category
          </NavLink>
        </li>
        <li>
          <NavLink to="/addProduct" className="dropdown-item">
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <button className="dropdown-item" onClick={logoutHandler}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
