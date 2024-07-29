import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../actions/appAction";
import { useEffect } from "react";
import { logout } from "../../actions/authAction";

export default function Dropdown() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.app.modal);
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(
      showModal({
        title: "Logout",
        text: "Are you sure you want to logout?",
        btnSuccess: "Logout",
        btnCancel: "Cancel",
        width: "300px",
      })
    );
  };

  useEffect(() => {
    if (modal.successCliced) {
      dispatch(logout());
      dispatch(showModal({}));
      navigate("/");
    }
  }, [modal.successCliced]);

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
          <NavLink to="/addProduct" className="dropdown-item">
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/addCategory" className="dropdown-item">
            Add Category
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
