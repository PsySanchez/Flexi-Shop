import Header from "../Header/Header";
import Router from "../Router/Router";
import { NavbarProvider } from "../Navbar/NavbarContext";

export default function Main() {
  return (
    <>
      <NavbarProvider>
        <Header />
        <main>
          <Router />
        </main>
      </NavbarProvider>
    </>
  );
}
