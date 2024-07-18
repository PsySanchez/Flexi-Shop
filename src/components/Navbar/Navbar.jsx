import React, { useRef } from "react";
import { useNavebar } from "./NavbarContext";
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";

export default function Navbar() {
  const { nav, onClick } = useNavebar();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={"nav-link active"}
                aria-current="page"
                href="home"
                onClick={onClick}
                style={{
                  color: nav === "home" ? "#0d6efd" : "",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={onClick}>
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <Dropdown />
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="about"
                onClick={onClick}
                style={{
                  color: nav === "about" ? "#0d6efd" : "",
                }}
              >
                About
              </a>
            </li>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
}
