import React, { createContext, useContext, useState, useEffect } from "react";

const NavbarContext = createContext();

export const useNavebar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    let route = window.location.pathname.replace("/", "");
    // if the route is empty, set it to "home"
    if (!route) route = "home";
    // set the URL without refreshing the page
    window.history.replaceState({}, "", route);
    setNav(route);
  }, []);

  const onClick = (event) => {
    // prevent the page from refreshing
    event.preventDefault();

    // get the route from the href attribute
    const route = event.target.href.split("/").pop();
    // set the URL without refreshing the page
    window.history.replaceState({}, "", route);
    setNav(route);
  };

  return (
    <NavbarContext.Provider value={{ nav, onClick }}>
      {children}
    </NavbarContext.Provider>
  );
};
