import { NavLink } from "react-router-dom";
export default function Dropdown() {
  return (
    <div className="dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </a>

      <ul className="dropdown-menu">
        <li>
          <NavLink to="/about" className="dropdown-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/">
            Another action
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/">
            Something else here
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
