import { useState, useEffect } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import { useNavebar } from "../Navbar/NavbarContext";

export default function Router() {
  const { nav } = useNavebar();
  const [currentNav, setCurrentNav] = useState("");

  useEffect(() => {
    if (typeof nav === "string") setCurrentNav(nav);
  }, [nav]);

  return (
    <>
      {currentNav === "home" && <Home />}
      {currentNav === "about" && <About />}
    </>
  );
}
