import { useNavebar } from "../Navbar/NavbarContext";

export default function Dropdown() {
  const { onClick } = useNavebar();

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
          <a className="dropdown-item" href="about" onClick={() => onClick}>
            About
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={() => onClick}>
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={() => onClick}>
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
